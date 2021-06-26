import { render } from '@testing-library/react'
import { SomeComponent } from '.'

describe('<SomeComponent />', () => {
  it('should render default title and body', () => {
    const { getByRole, getByText, container } = render(<SomeComponent />)

    getByRole('heading', { name: /hello!/i })
    getByText(/hello, world!/i)

    expect(container.firstChild).toMatchSnapshot()
  })
})
