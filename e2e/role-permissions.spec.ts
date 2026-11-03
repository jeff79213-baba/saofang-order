import { test, expect } from '@playwright/test'

test('櫃台看得到一鍵滿房與換日，且不是打掃鎖定', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('一鍵滿房')).toBeVisible()
  await expect(page.getByText('換日')).toBeVisible()
  await expect(page.getByRole('button', { name: '一般模式' })).toBeVisible()
})

test('房務自動打掃模式且看不到櫃台按鈕', async ({ page }) => {
  await page.goto('/?role=housekeeping')
  await expect(page.getByText('打掃模式', { exact: true })).toBeVisible()
  await expect(page.getByText('一鍵滿房')).toHaveCount(0)
  await expect(page.getByText('換日')).toHaveCount(0)
})

test('房務在打掃模式可標記已打掃', async ({ page }) => {
  await page.goto('/?role=housekeeping')
  const card = page.getByText('101').first()
  await card.click()
  await expect(page.getByText('✓ 已打掃').first()).toBeVisible()
})
