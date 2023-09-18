import { describe, expect, it } from 'vitest'
import { List, ListNode, mergeTwoLists } from './index'

describe.skip('mergeTwoLists', () => {
  it('merges two sorted lists', () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(4)
    node1.next = node2
    node2.next = node3

    const node4 = new ListNode(1)
    const node5 = new ListNode(3)
    const node6 = new ListNode(4)
    node4.next = node5
    node5.next = node6

    const result = mergeTwoLists(node1, node4)
    const array = result?.toArray(result)
    expect(array).toEqual([1, 1, 2, 3, 4, 4])
  })
})
