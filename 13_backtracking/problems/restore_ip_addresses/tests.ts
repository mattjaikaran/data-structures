function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { restoreIpAddresses } from '../../problems/restore_ip_addresses/solution.ts';



const ip = restoreIpAddresses("25525511135");
assert(ip.includes("255.255.11.135") && ip.includes("255.255.111.35"), "restoreIp");
console.log('PASS 13_backtracking/restore_ip_addresses (ts)');
