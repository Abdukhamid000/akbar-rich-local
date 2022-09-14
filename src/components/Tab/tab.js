import React, { useEffect, useState } from 'react'
import TabPane from './tabpane'

import styles from './style.module.css'

const Tabs = (props) => {
  const { children, tabStyle = styles.tabHeader } = props
  const [tabHeader, setTabHeader] = useState([])
  const [childContent, setChildConent] = useState({})
  const [active, setActive] = useState('')
  useEffect(() => {
    const headers = []
    const childCnt = {}
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return
      const { name } = element.props
      headers.push(name)
      childCnt[name] = element.props.children
    })
    setTabHeader(headers)
    setActive(headers[0])
    setChildConent({ ...childCnt })
  }, [props, children])

  const changeTab = (name) => {
    setActive(name)
  }

  return (
    <div className={styles.tabs}>
      <ul className={tabStyle}>
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? styles.active : ''}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.tabContent}>
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div className="tab-child">{childContent[key]}</div>
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          '`' + componentName + '` children should be of type `TabPane`.'
        )
      }
    })
    return error
  },
}

export default Tabs
