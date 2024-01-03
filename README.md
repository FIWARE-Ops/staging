# FIWARE Marketplace Product Generator
FIWARE Marketplace Data

1. Download the Approved Products as a CSV file.
2. Copy over the Products CSV to `products.csv`
3. Copy over the Product Details CSV to `product-details.csv`
4. To generate files run:

```console
npm run marketplace
```

5. Upload generated `pageData.js` for each category on fiware.org to WP Content > Marketplace > Category folder (e.g. powered-by-fiware)
6. Upload generated `products.js` onto fiware.org

   
## Install

The process to setup the tool is as follows:

1. Install Node.js and Git

```console
brew install node
brew install npm
brew install git
```

2. Download the tool

```console
git clone https://github.com/FIWARE-Ops/fiwaremarketplace.git
```

3. Install Node.js libraries

```console
npm install
```

4. Optional Copy an edit a version of Keys and edit the list of auto-downloaded CSVs.

## Usage

### Update FIWARE Marketplace Products

```console
npm run marketplace
```

### Update FIWARE Global Summit Speakers

```console
npm run speakers
```

### Update People listings on fiware.org

- FIWARE Team

```console
npm run team|people
```

- Board of Directors

```console
npm run bod
```

-  Board of Officers

```console
npm run boo
```

- FIWARE Experts

```console
npm run experts
```

- FIWARE Evangelists

```console
npm run evangelists
```

- FIWARE Mission Support Committees

```console
npm run msc
```

- FIWARE Technical Support Committee

```console
 npm run tsc
```

- Scientific Advisory Board

```console
npm run fisab
```

### Update Directory listings on fiware.org

- FIWARE Smart Cities

```console
npm run cities
```

-  FIWARE Jobs Postings

```console
npm run careers
```

- FIWARE Domains

```console
npm run domains
```

- FIWARE Generic Enablers

```console
npm run enablers
```

- FIWARE iHubs

```console
npm run ihubs|iHubs
```

- FIWARE Impact Stories

```console
npm run impact-stories
```

- FIWARE Marketing Materials

```console
npm run marketing
```

- FIWARE Open Calls

```console
npm run open-calls
```

- FIWARE Membership

```console
npm run organisations
```

- FIWARE Research and Development Projects

```console
npm run research-development
```

- FIWARE Webinars

```console
npm run webinars
```


## License

[Apache 2.0](LICENSE) © 2022-2024 FIWARE Foundation e.V.
