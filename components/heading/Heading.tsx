import styles from './heading.module.css'

const Heading = ({text , center = false } : {text: string , center?: boolean}) => {
  return (
    <div className={`${styles.heading} ${center ? 'text-center' : ''}`}>{text}</div>
  )
}

export default Heading