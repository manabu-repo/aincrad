// 21-easy

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  toArray(head: ListNode | null): number[] {
    const result: number[] = []
    let current = head
    while (current) {
      result.push(current.val)
      current = current.next
    }
    return result
  }
}

export class List {
  private head: ListNode | null

  constructor(arr?: number[]) {
    this.head = null

    if (arr && arr.length > 0) {
      for (let i = 0; i < arr.length; i++)
        this.addNode(arr[i])
    }
  }

  addNode(val: number): void {
    const newNode = new ListNode(val)
    if (!this.head) {
      this.head = newNode
    }
    else {
      let current = this.head
      while (current.next)
        current = current.next

      current.next = newNode
    }
  }

  toArray(): ListNode[] {
    const result: ListNode[] = []
    let current = this.head
    while (current) {
      result.push(current)
      current = current.next
    }
    return result
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null)
    return list2

  if (list2 === null)
    return list1

  const head = list1
  let tail = list2

  while (list2 !== null) {
    tail.next = list2
    tail = list2
    list2 = list2.next
  }

  tail.next = null
  return head
}
