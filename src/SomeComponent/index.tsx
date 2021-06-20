export type SomeComponentProps = {
  title?: string
  body?: string
}

const SomeComponent = (props: SomeComponentProps) => {
  const { title = 'Hello!', body = 'Hello, world!' } = props

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default SomeComponent
