# FIWARE Staging website for data-driven web pages 

<img src="https://www.fiware.org/style/imgs/Marketplace/FIWAREMarketplace_Visual.svg" align="center" />

FIWARE Marketplace Data

1. Download the Approved Products as a CSV file.
2. Copy over the Products CSV to - `products.csv`
3. Copy over the Product Details CSV to - `product-details.csv`
4. To generate files run: - `npm run showcase`
5. Upload generated - `pageData.js` for each category on fiware.org to WP Content > Showcase > Category folder (e.g. powered-by-fiware)
6. Upload generated - `products.js` onto fiware.org

   
## Install

The process to setup the tool is as follows:

1. Install Node.js and Git 

```console
brew install node
brew install npm
brew install git
```

2. Download the tool - 

```console
git clone https://github.com/FIWARE-Ops/staging.git
```

3. Install Node.js libraries - `npm install`
4. Optional Copy an edit a version of Keys and edit the list of auto-downloaded CSVs.

## Usage

### Update FIWARE Showcase Products

- `npm run showcase`

### Update FIWARE Global Summit

- `npm run agenda` - FIWARE Global Summit Agenda 
- `npm run speakers` - FIWARE Global Summit Speakers 
- `npm run sponsors` - FIWARE Global Summit Sponsors

### Update People listings on fiware.org

- `npm run team|people` - FIWARE Team 
- `npm run bod` - Board of Directors 
- `npm run boo` - Board of Officers 
- `npm run experts` - FIWARE Experts 
- `npm run evangelists` - FIWARE Evangelists 
- `npm run msc` - FIWARE Mission Support Committees 
- `npm run tsc` - FIWARE Technical Support Committee 
- `npm run fisab` - Scientific Advisory Board 

### Update Directory listings on fiware.org

- `npm run cities` - FIWARE Smart Cities 
- `npm run careers` - FIWARE Jobs Postings 
- `npm run domains` - FIWARE Domains 
- `npm run enablers` - FIWARE Generic Enablers 
- `npm run events`- FIWARE Event Listings 
- `npm run ihubs|iHubs` - FIWARE iHubs 
- `npm run impact-stories` - FIWARE Impact Stories
- `npm run marketing` - FIWARE Marketing Materials 
- `npm run open-calls` - FIWARE Open Calls 
- `npm run organisations` - FIWARE Membership 
- `npm run research-development` - FIWARE Research and Development Projects 
- `npm run webinars` - FIWARE Webinars 

## License

[Apache 2.0](LICENSE) © 2022-2024 FIWARE Foundation e.V.
