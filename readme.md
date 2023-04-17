# TeamsJS Capability Checker

Sample application to demonstrate the capabilities of TeamsJS in Microsoft Teams apps extended across Outlook and Microsoft 365.

## Prerequisites

- Microsoft 365 Tenant with Sideloading enabled
- Visual Studio Code
- Teams Toolkit v4.2.4

## Instructions to Start without Graph API( This means you will be unable to use all of the Calendar and Mail API functions) 

- Clone repo, open in Visual Studio Code
- Run debug (F5)
  - Sideload app in Outlook or Microsoft 365
  
  
## Instructions to Start with Graph API
## Prerequisite
- [Node.js](https://nodejs.org/), supported versions: 14, 16, 18 (preview)
- An [Azure subscription](https://azure.microsoft.com/en-us/free/)
- A Microsoft 365 account. If you do not have Microsoft 365 account, apply one from [Microsoft 365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)

## Try the Sample with Visual Studio Code Extension:

### Local Debug the Sample
1. Clone the repo to your local workspace or directly download the source code.
1. Download [Visual Studio Code](https://code.visualstudio.com) and install [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit).
1. Open the project in Visual Studio Code.
1. Open Debug View (`Ctrl+Shift+D`) and select "Debug (Edge)" or "Debug (Chrome)" in dropdown list.
1. Press "F5" to open a browser window and then select your package to view contact exporter sample app. 

### Provision and Deploy the Sample to Azure
> If you don't have an Azure subscription, create [a free account](https://azure.microsoft.com/en-us/free/) before you begin
1. Open the command palette and select `Teams: Provision in the cloud`. You will be asked to select Azure resource group to provision the sample.
1. Once provision is completed, open the command palette and select `Teams: Deploy to the cloud`.
1. Once deployment is completed, you can preview the APP running in Azure. In Visual Studio Code, open `Run and Debug` and select `Launch Remote (Edge)` or `Launch Remote (Chrome)` in the dropdown list and Press `F5` or green arrow button to open a browser.
