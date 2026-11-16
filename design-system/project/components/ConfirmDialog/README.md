# ConfirmDialog

shadcn `AlertDialog`. Every destructive or wide-reaching action has one. VPN-703 §1 lists 7 actions without a confirm today; each gets this step in its F-slice.

Three kinds:
1. **Simple confirm** (warn icon): actions that reach many users or cannot be stopped ("Run this push now?"). States the reach in numbers.
2. **Type to confirm** (red icon): delete server, delete provider account, delete load balancer. Lists the consequences (users affected, list items left, cloud machine). The red button stays disabled until the name matches.
3. **Review changes** (info icon): Ladder order save, app version force. Shows old → new side by side, changed items in `info-bg`, and asks for a reason that goes to Change history.

Text: title is the question with the object name. Buttons say the action ("Delete server", "Save order"), never "OK" or "Yes".
