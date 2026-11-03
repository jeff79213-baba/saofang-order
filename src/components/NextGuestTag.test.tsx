import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { NextGuestTag } from './NextGuestTag'

describe('NextGuestTag', () => {
  it('on=false 且 editable → 顯示 ＋後續入住 且可點', () => {
    const onToggle = vi.fn()
    render(<NextGuestTag on={false} editable onToggle={onToggle} />)
    fireEvent.click(screen.getByText('＋後續入住'))
    expect(onToggle).toHaveBeenCalled()
  })
  it('on=true → 顯示 後續入住 標籤', () => {
    render(<NextGuestTag on editable onToggle={() => {}} />)
    expect(screen.getByText('後續入住')).toBeTruthy()
  })
  it('不可編輯且 on=false → 不渲染任何東西', () => {
    const { container } = render(<NextGuestTag on={false} editable={false} onToggle={() => {}} />)
    expect(container.textContent).toBe('')
  })
})
