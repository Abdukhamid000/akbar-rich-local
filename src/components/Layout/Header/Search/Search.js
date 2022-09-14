import { useMemo, useRef, useState } from 'react'
import cls from "./Search.module.css";

import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link';

const AutocompleteItem = ({ id, title, img, price }) => {
  return (
    <Link href={`/detail/${id}`} target="_blank" rel='noreferrer' >
      <div className={cls.autocompleteItem_card}>
        <img src={img} alt={title} width="100" height="80" />
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </Link>
  )
}


export default function Search({ searchbar, props }) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: ' Поиск по сайту',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'offers-next-api',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch(`/api/search?q=${query}`)
            .then(res => res.json())
        }
      }
    }],
    ...props
  }), [props])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className={searchbar ? `${cls.searchForm}  ${cls.active} ` : `${cls.searchForm}`} {...formProps}>
      <div className={cls.searchForm_container}>
        <div className={cls.input_holder}>
          <input ref={inputRef} className={cls.algolia_input} {...inputProps} />
        </div>
        {
          autocompleteState.isOpen && (
            <div className={cls.autocomplete} ref={panelRef} {...autocomplete.getPanelProps()}>
              <div className={cls.searchSources}>
                <div className={cls.searchSources_item}>
                  <h5>Каталог</h5>
                  <p>Нечего не найдено</p>
                </div>
                <div className={cls.searchSources_item}>
                  <h5>Новости</h5>
                  <p>Нечего не найдено</p>
                </div>
                <div className={cls.searchSources_item}>
                  <h5>Страницы</h5>
                  <p>Нечего не найдено</p>
                </div>
              </div>

              {autocompleteState.collections.map((collection, index) => {
                const { items } = collection
                return (
                  <section key={`section-${index}`} >
                    {items.length > 0 && (
                      <div {...autocomplete.getListProps()} className={cls.autocomplete_grid}>
                        {
                          items.slice(0, 4).map(item => <AutocompleteItem key={item.id} {...item} />)
                        }
                        <Link className={cls.resultNum} href='/'>See all matching {items.length}</Link>
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          )
        }
      </div>
    </form>
  )
}