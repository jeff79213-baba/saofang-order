import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeaderBar } from './HeaderBar'

function setup(role: 'front' | 'housekeeping', onClearHouse = vi.fn(), onMarkAllClean = vi.fn()) {
  render(
    <HeaderBar
      building="A" onBuilding={() => {}} role={role} mode="normal"
      dayKey="2026-11-12" isDemo={false}
      onFillHouse={() => {}} onClearHouse={onClearHouse} onMarkAllClean={onMarkAllClean} onResetDay={() => {}}
      onSettings={() => {}} onSignOut={() => {}}
    />,
  )
  return { onClearHouse, onMarkAllClean }
}

describe('HeaderBar', () => {
  it('櫃台看得到一鍵未入住，點擊會呼叫', () => {
    const { onClearHouse } = setup('front')
    fireEvent.click(screen.getByText('一鍵未入住'))
    expect(onClearHouse).toHaveBeenCalled()
  })

  it('櫃台看得到一鍵已掃，點擊會呼叫', () => {
    const { onMarkAllClean } = setup('front')
    fireEvent.click(screen.getByText('一鍵已掃'))
    expect(onMarkAllClean).toHaveBeenCalled()
  })

  it('房務不顯示一鍵未入住與一鍵已掃', () => {
    setup('housekeeping')
    expect(screen.queryByText('一鍵未入住')).toBeNull()
    expect(screen.queryByText('一鍵已掃')).toBeNull()
  })
})
