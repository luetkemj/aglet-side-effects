# Aglet Side Effects

14891 unique drug side effects for your hapless PCs.

Returns a random side effect - useful for providing flavor to your PCs failed foraging attempts, random dungeon diseases, or ill advised visits to the seedier parts of town.

Warning - all side effects are from actual medications. No attempt has been made to remove NSFW or nightmare inducing symptoms. Use at your own risk.

## Quick Start

- clone repo
- `npm install` or `yarn`
- `node sfx`

## Usage:

- `node sfx`

logs a random side effect to console; ex: *"nausea, vomiting, black, tarry stools"*

- `node count`

logs the number of available side effects to console

- `node import [path] [overwrite]`

import new data to parsedData.json file.

*path* string - required - path to json file for import

*overwrite* boolean - optional - defaults to false - flag for overwriting existing data in parsedData.json
