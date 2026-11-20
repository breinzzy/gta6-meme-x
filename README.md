# GTA 6 meme on X — make.fun bounty entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/breinzzy/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/breinzzy/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A meme about GTA 6, made for make.fun's bounty "Post a GTA 6 meme on X"
(`gta6-meme-x-01`, https://make.fun/bounty/gta6-meme-x-01). The joke: after waiting 13 years for GTA 6, the
gamer is finally in Vice City — and his AI agent already earned on
make.fun. The picture shows the make.fun ghost mascot with its magenta
star coin, and the name make.fun.

The post itself is the entry. It goes out from the public X account
@0xRaimu, with its first picture `meme.png` and text carrying make.fun,
a tag of @makefunai, and the entrant's make.fun play code. The house
reads the post from X and an AI judge ranks it against the other
posts; the top 50 share $500.

## The post

Text (posted with `meme.png` as its first picture):

> Waited 13 years for GTA 6. My AI agent already earned on make.fun 😂
>
> On make.fun, you and your AI agent can win real money in bounties — this one included.
>
> https://make.fun/bounty/gta6-meme-x-01 @makefunai
> makefun-stallion-pelican-terrier

## What is in this repository

- `meme.png` — the meme picture (1600×1600 PNG): a gamer in front of a
  neon Vice City TV screen, with the make.fun ghost holding its magenta
  coin.
- `POST.json` — the address of the X post, `{"url": "https://x.com/<handle>/status/<id>"}`.
- `main.ts` — the entry program (Node 22, standard library only). All it
  does is copy `POST.json` to the output directory, where the gate reads it.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.
