import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeaderBar } from './HeaderBar'

function setup(role: 'front' | 'housekeeping', onClearHouse = vi.fn()) {
  render(
    <HeaderBar
      building="A" onBuilding={() => {}} role={role} mode="normal" onMode={() => {}}
      dayKey="2026-11-12" isDemo={false}
      onFillHouse={() => {}} onClearHouse={onClearHouse} onResetDay={() => {}}
      onSettings={() => {}} onSignOut={() => {}}
    />,
  )
  return onClearHouse
}

describe('HeaderBar', () => {
  it('櫃台看得到一鍵未入住，點擊會呼叫', () => {
    const onClearHouse = setup('front')
    fireEvent.click(screen.getByText('一鍵未入住'))
    expect(onClearHouse).toHaveBeenCalled()
  })

  it('房務不顯示一鍵未入住', () => {
    setup('housekeeping')
    expect(screen.queryByText('一鍵未入住')).toBeNull()
  })
})
