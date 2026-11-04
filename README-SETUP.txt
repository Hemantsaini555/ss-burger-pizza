# SS Burger & Pizza — mobile PWA starter

## Included
- Mobile menu and cart
- Cafe coordinates: 25.3075373, 75.7378595
- 5 km delivery check using the customer's browser location
- ₹20 delivery fee; takeaway has no delivery fee
- Firebase anonymous sign-in and Firestore order submission
- UPI intent launch (payment is NOT automatically verified)

## Before publishing
1. Open `firebase-config.js` and replace `PASTE_YOUR_FIREBASE_WEB_API_KEY_HERE` with the Web API key from Firebase Project settings.
2. Make sure Firebase Authentication has Anonymous sign-in enabled.
3. Create Firestore database.
4. Configure and test secure Firestore rules before accepting public orders. Do not use open/test-mode rules.
5. Publish the files to the root of the GitHub Pages site.

## Important limitations of this starter
- The 5 km check uses the customer's device GPS and is a convenience check, not tamper-proof verification.
- Menu prices are sent by the browser. A production deployment needs server-side price validation / trusted order processing.
- UPI redirect does not confirm payment. Verify payment in the merchant UPI app before marking an order paid.
- This starter does not yet include a secure owner dashboard, order notifications, or customer order tracking.
