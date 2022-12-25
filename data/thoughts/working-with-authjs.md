---
title: 'Working with Auth.js'
date: '2022-12-14'
image: working-with-authjs.jpg
excerpt: Auth.js is the open source flexible and secure authentication for the web ...
isFeatured: true
---

**Disclaimer:** **_Not an Original thought. This is sourced from the internet and used to illustrate adding rich text content to a Next.js project_**

## Open, Full Stack. Own your Data

Auth.js supports popular services like _Google, Facebook, Auth0, Apple..._ as well as built-in email / passwordless / magic link. It works with any modern framework and not just Next.js, and consumes data from anywhere: _MySQL, Postgres, MSSQL, MongoDB…_.

More importantly, it is secure:

> Signed, prefixed, server-only cookies
> Built-in CSRF protection
> JWT with JWS / JWE / JWK
> Tab syncing, auto-revalidation, keepalives
> Doesn't rely on client side JavaScript

### Add to Next.js project `/pages/api/auth/[...nextauth].js`

```js
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
	providers: [
		// OAuth authentication providers...
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
});
```

[Auth.js](https://authjs.dev/)

[Get Started](https://authjs.dev/getting-started/introduction)

[NextAuth.js](https://next-auth.js.org/)

Will now run some tests

[NextAuth.js](https://next-auth.js.org/)

Lets see if the style for the first three links afects the last

`<time className={styles.thoughtDate}>Written {formatedDate(updateDate)}</time>`
