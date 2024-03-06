//https://leetcode.com/problems/defanging-an-ip-address
export function defangIPaddr(address: string): string {
    return address.replace(/\./g, '[.]');
}
