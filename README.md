# fiwaremarketplace
FIWARE Marketplace Data

1. Download the Approved Products as a CSV file.
2. Copy over the Products CSV to `products.csv`
3. Copy over the Product Details CSV to `product-details.csv`
4. To generate files run:

```console
npm start && npm run prettier
```

5. Upload generated `pageData.js` for each category on fiware.org to WP Content > Marketplace > Category folder (e.g. powered-by-fiware)
6. Upload generated `products.js` onto fiware.org


## Options

### Update Marketplace products

```console
PROCESS=products npm start && npm run prettier
```

### Update Webinars listings

```console
PROCESS=webinars npm start && npm run prettier
```

### Check validity and size of hero images

```console
PROCESS=products+images npm start
```
