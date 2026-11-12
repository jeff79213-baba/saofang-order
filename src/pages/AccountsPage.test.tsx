import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccountsPage } from './AccountsPage'

vi.mock('../lib/accounts', () => ({
  listAccounts: vi.fn(async () => [
    { uid: 'u1', email: 'wind00@saofang.local', role: 'front', name: '', note: '', disabled: false, deleted: false },
    { uid: 'u2', email: 'jeff@saofang.local', role: 'housekeeping', name: '', note: '', disabled: false, deleted: false },
  ]),
  setNote: vi.fn(),
  setRole: vi.fn(),
  disableAccount: vi.fn(),
  enableAccount: vi.fn(),
  deleteAccount: vi.fn(),
  restoreAccount: vi.fn(),
  createAccount: vi.fn(),
}))

describe('AccountsPage', () => {
  it('本人帳號只顯示「本人」，不提供停用或刪除', async () => {
    render(<AccountsPage onBack={() => {}} selfUid="u1" />)
    await screen.findByText('wind00@saofang.local')
    expect(screen.getByText('本人')).toBeTruthy()
    expect(screen.getByText('本人帳號不可在此停用或刪除')).toBeTruthy()
    expect(screen.getAllByText('刪除')).toHaveLength(1)
    expect(screen.getAllByText('停用')).toHaveLength(1)
  })
})
