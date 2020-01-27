# ACML 2020 Website
![](https://github.com/heytitle/acml2020/workflows/CI/badge.svg)

## Development
- NodeJS v11.4.0 or higher

### Backlog
Currently, we use Google Spreadsheet for planning the development. Please see https://docs.google.com/spreadsheets/d/1aXwyOjh3820FxpYXKiTAIcFOXKm9w8WvKIlZiZB_jGk/edit?usp=drive_web&ouid=110926949660676624980.

## Environments
| Environment  | URL |
|:-------------:|:-------------:|
| Staging | https://thirsty-cori-5d6045.netlify.com |
| Production | http://www.acml-conf.org/2020/ |

**Note**: Each PR will also be automatically built by Netlify.


## How to Release to Production
Currently, release has to be done locally.
1. Make sure that local master branch is up to date.
2. Make sure that no development server is running.
2. Make sure that you have set `.fpt_setting`'s content properly. Please see [an example](https://gist.github.com/heytitle/e1e77020892b0092c5600c99243217de).
3. Run `npm run release`. You have to type the FTP password manually.

## Acknowledgements
This is built on Gatsby.