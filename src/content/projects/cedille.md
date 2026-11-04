---
title: Cedille
summary: "The largest language model for French at the time (6B), released under MIT license."
image: /img/projects/cedille.jpg
role: ML engineer at Coteries
links:
  - { label: "Paper (arXiv)", url: "https://arxiv.org/abs/2202.03371" }
  - { label: GitHub, url: "https://github.com/coteries/cedille-ai" }
  - { label: "Reddit (r/MachineLearning)", url: "https://www.reddit.com/r/MachineLearning/comments/qqzuh0/p_cedille_the_largest_french_language_model_6b/" }
  - { label: "Hacker News", url: "https://news.ycombinator.com/item?id=29179429" }
---

We trained and deployed [Cedille](https://github.com/coteries/cedille-ai), the largest language model for French at the time (6B), released under MIT license. We used TPUs (v3-128) through Google's TRC program. For a couple of months we were beating OpenAI's best model (GPT-3 `davinci`) on French benchmarks!

## Press

- Radio-Canada (2021-11-24): [Et si une intelligence artificielle rédigeait des textes à votre place?](https://ici.radio-canada.ca/nouvelle/1842411/intelligence-artificelle-cedille-ai-ia-suisse-apprentissage-generer-texte)
- Heidi.news (2021-11-23): [Avec Cedille, la Suisse invente sa propre IA francophone](https://www.heidi.news/articles/avec-cedille-la-suisse-invente-sa-propre-ia-francophone/gifts/roVuoziHYvXqsxaBgnywPokde9acFZjp36ntbvcn)
- Numerama (2021-11-22): [Cette IA qui écrit toute seule montre que les biais racistes et homophobes peuvent être évités](https://www.numerama.com/pop-culture/755882-cedille-lia-qui-ecrit-toute-seule-en-francais-parvient-elle-a-eviter-les-biais-racistes.html)
- 20 Minutes (2021-11-11): [«On a l'impression d'entendre la machine parler»](https://www.20min.ch/fr/story/on-a-limpression-dentendre-la-machine-parler-130291986461)
- ICTjournal (2021-11-09): [L'agence digitale romande Coteries lance une alternative francophone à GPT-3](https://www.ictjournal.ch/articles/2021-11-09/lagence-digitale-romande-coteries-lance-une-alternative-francophone-a-gpt-3)
- 24 heures: [L'intelligence artificielle arrive au service de l'écriture](https://www.24heures.ch/lintelligence-artificielle-arrive-au-service-de-lecriture-416348520640)
- Bilan: [Cedille veut révolutionner l'écriture basée sur le machine learning](https://www.bilan.ch/story/cedille-veut-revolutionner-lecriture-basee-sur-le-machine-learning-298273365868)
- Startupticker: [Swiss startup launches milestone French language model](https://www.startupticker.ch/en/news/swiss-startup-launches-milestone-french-language-model)
- SNGLR: [Cedille, the largest French AI language model, is actually from Switzerland](https://blog.snglr.group/cedille-the-largest-french-ai-language-model-is-actually-from-switzerland/)

<!-- research

NOTES

Reddit threads:
  r/MachineLearning launch (2021-11-10): 170 points, 25 comments. qqzuh0
  r/france, posted by someone else (2021-11-10): 46 points, 29 comments; you replied "C'est moi qui ait fait (ok avec des potes), AMA". qr1zxb
  r/GPT3 (2021-11-12): 15 points, 4 comments. qs7240
  r/MachineLearning paper (2022-02-08): 23 points, 3 comments. snxka2
  r/MachineLearning repost by someone else (2021-11-14): 18 points. qt5ekt

What people said:
1. Technical questions (r/ML, r/GPT3): HuggingFace compatibility (StellaAthena from EleutherAI pointed to the
   GPT-J -> HF conversion script), warm start from GPT-J vs from scratch, layer freezing, tokenizer, training
   cost, number/type of TPUs, datasets.
2. Data quality: generations copying web/forum artefacts ("Posté le", "Sujet: Re: … Mar 15 Avr 2008 - 11:48").
3. Bias & toxicity, the main r/france debate: an example associating Arabic first names with delinquency
   ("plus un problème de biais que de toxicité"), "Why make it less toxic?", "C'est bien en s'y exposant que
   l'humain apprend les interdits, non?", plus a few deliberately provocative generations.
4. Fun generations: the Marseillaise turning into a war with the Greeks, Camus' "Aujourd'hui maman est morte",
   the Otis monologue from Astérix, Reddit France, Macron/Zemmour "first measures", a creative right triangle.
   tim_ohear's one-shot EN->FR translations worked well.
5. Open source skepticism on r/france (empty GitHub repo, a ToS clause against extracting weights): resolved
   by your reply; you agreed the clause no longer made sense.
6. Praise: "true open AI", "ça déchire", "French-speaking people from all around the world will benefit".
   da_mulle (Martin, co-author) posted a long comment on French benchmarking challenges (28 points, top comment).

Press angles: ICTjournal "a francophone alternative to GPT-3"; Heidi.news "Switzerland invents its own
francophone AI"; Numerama: racist/homophobic biases can be avoided; Bilan: revolutionizing writing;
20 Minutes: "it feels like hearing the machine talk"; Radio-Canada: AI writing texts for you.

## Full draft (my own words, verbatim)

[TODO edit: first draft assembled verbatim from my own words: old bio, About page, and my Reddit posts and comments (2021–2022)]

(source: old bio)
Trained and deployed [Cedille](https://github.com/coteries/cedille-ai), the largest language model for French at the time (6B), released under an open-source license (MIT), with a free and public playground.

(source: About page)
We trained and deployed [Cedille](https://github.com/coteries/cedille-ai), the largest language model for French at the time (6B), released under MIT license. For a couple of months we were beating OpenAI's best model (GPT-3) on French benchmarks!

(source: r/MachineLearning launch post, 2021-11-10)
## [📝 DEMO](https://app.cedille.ai) / [📘 REPO](https://github.com/coteries/cedille-ai)

We have spent the last 3 months of our lives, teraFLOPs of compute and gone through 300gb of text to bring you Cedille:

> **Ce que j'aime quand je mange une baguette, c'est** quand celle-ci est craquante.
Je ne saurais définir le terme "craquant" mais je sais que lorsque c'est le cas, je peux être sûre que la baguette est bonne.

The entirety of French spirit captured in measly 6B parameters! 🇫🇷🥖

More seriously, we are super excited to share Cedille, the so far largest French language model: https://en.cedille.ai

You can play with it right now on our playground (as long as servers hold 😅) : https://app.cedille.ai

We are proponents of “open AI” and as such have released a checkpoint for the world to use (MIT license) : https://github.com/coteries/cedille-ai

Another aspect we had fun with is dataset filtering. We have run the [whole C4 French dataset](https://github.com/allenai/allennlp/discussions/5265) through the Detoxify classifier to clean it up 🤬

Some acknowledgements :

* Cedille is based on GPT-J, the 6b model developed by the wizards at EleutherAI: https://arankomatsuzaki.wordpress.com/2021/06/04/gpt-j/
* Cedille was also generously supported by the Google TRC program: https://sites.research.google/trc/about/

(source: r/MachineLearning paper post, 2022-02-08)
Enfin ! The CedilleAI paper is out 🥖🇫🇷 

https://arxiv.org/abs/2202.03371

Cedille is a finetuned version of GPT-J in French, check out the launch post for previous discussions: 

https://www.reddit.com/r/MachineLearning/comments/qqzuh0/p_cedille_the_largest_french_language_model_6b/ 

Cedille juuust beats GPT-3 (davinci) in French language perplexity. This is great news given that Cedille is ~30x smaller than GPT-3. 

It’s also the first French language model that is competitive at zero-shot/instruction-based tasks. Cedille beats GPT-3 for en→fr translation (WMT14) and other large French models at summarization (OrangeSum).

We analysed Cedille’s toxicity using Detoxify, following the approach from the RealToxicityPrompt paper, and it’s generally better behaved than its peers (GPT-2 is even less toxic, but it writes gibberish French, so that’s cheating!)

In general, Cedille is a testament to the efficiency of finetuning compared to training from scratch. Our experiments also indicate no major advantage of using dedicated French tokenizers (we are using GPT-2 tokenizer).

Cedille is [available on HuggingFace](https://huggingface.co/Cedille/fr-boris) and can be tried out on our playground: http://app.cedille.ai.

(source: r/MachineLearning, 2021)
We started from the English GPT-J checkpoint

(source: r/MachineLearning, 2021)
We mostly stuck to the finetuning recommendations provided by GPT-J: https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md

We trained on 300gb of uncompressed text (= 78B tokens), which took 12.5 days for the final model on a v3-128 TPU.

The Google TRC program provided us with the TPU compute. There's no public price for renting v3-128 TPU.

(source: r/MachineLearning, 2021)
We didn't do any layer freezing. 

We didn't retrain the tokenizer, it would have been tricky as we started from an existing English checkpoint, but it's definitely something we'd like to experiment with. The current tokenizer is not so efficient for French :-/

(source: r/MachineLearning, 2021)
It's clearly better at French than at English now! But very good at English to French translation - better at that than GPT-3 actually

(source: r/MachineLearning, 2021)
Not just yet! the currently provided checkpoint works with the GPT-J codebase: https://github.com/kingoflolz/mesh-transformer-jax

(source: r/GPT3, 2021)
We have used multilingual C4: https://github.com/allenai/allennlp/discussions/5265

We have filtered the data for quality and toxicity, we’ll write more about the detailed process soon! (We used Detoxify)

We let it train for 12 days, during which it went through ~300gb of text (78b tokens). We started from GPT-J and finetuned it.

(source: r/MachineLearning, 2022)
You can request an API key if you want to run automated tests, it's still in beta but already works fairly well. It's also free for hobby/research purposes

https://en.cedille.ai/api

(source: r/france, 2021)
Oui, il y a encore du boulot à faire.

Donc là on a préfiltré tout le dataset (1128 GB 😱) avec [Detoxify](https://github.com/unitaryai/detoxify) pour filtrer le contenu toxique avant d'entraîner le modèle.

Mais le problème est que la notion de "contenu toxique" est très dure à définir, ça dépends du contexte, des cultures etc. Par exemple si tu demande à 10 personnes prisent au hasard sur terre de juger si la phrase "je suis un homme gay" est toxique ou pas, les réponses vont être très variées (cas véridique, je n'invente pas).

Il y a aussi beaucoup de moyens de dire des choses violentes sans utiliser de mots méchants et/ou de façons très détournées...

Donc effectivement le problème est encore loin d'être réglé.

Pour mesurer notre progression dans ce domaine on utilise les recherches faites dans la papier scientifique [Real Toxicity Prompts](https://realtoxicityprompts.apps.allenai.org/). On demande au modèle de compléter des milliers de phrases avec des débuts super tendencieux  (genre "So if you grab a woman by the..." et le modèle doit compléter), et on regarde les résultats. On fait en moyenne mieux que les autres modèles existants par rapport à ça mais encore loin d'être 100% clean. On planifie de communiquer plus sur cet aspect dans le futur.

Enfin, il y a aussi un problème plus fondamental, qui est qu'on veut que le modèle comprennent ce que disent et ce que veulent dire les gens. Du coup, ça veut aussi dire être capable de comprendre que le début de la phrase est toxique. Donc en fait un modèle qui n'écrit jamais de texte toxique est d'un certain côté "moins bon", par qu'il fera une complétion qui ne sera en fait pas conforme au ton et aux idées du début de la phrase.

(source: r/france, 2021)
Tout est en open source : le modèle est [disponible dans le repository](https://github.com/coteries/cedille-ai), et le code le faire tourner est dans le repository de GPT-J: https://github.com/kingoflolz/mesh-transformer-jax (ce lien est aussi dans le repo).

> Sans parler de cette close dans les conditions d'utilisation

Bien vu, effectivement ça n'a plus de sens maintenant que le modèle est open source :D

## Press

- Radio-Canada (2021-11-24): [Et si une intelligence artificielle rédigeait des textes à votre place?](https://ici.radio-canada.ca/nouvelle/1842411/intelligence-artificelle-cedille-ai-ia-suisse-apprentissage-generer-texte)
- Heidi.news (2021-11-23): [Avec Cedille, la Suisse invente sa propre IA francophone](https://www.heidi.news/articles/avec-cedille-la-suisse-invente-sa-propre-ia-francophone/gifts/roVuoziHYvXqsxaBgnywPokde9acFZjp36ntbvcn)
- Numerama (2021-11-22): [Cette IA qui écrit toute seule montre que les biais racistes et homophobes peuvent être évités](https://www.numerama.com/pop-culture/755882-cedille-lia-qui-ecrit-toute-seule-en-francais-parvient-elle-a-eviter-les-biais-racistes.html)
- 20 Minutes (2021-11-11): [«On a l'impression d'entendre la machine parler»](https://www.20min.ch/fr/story/on-a-limpression-dentendre-la-machine-parler-130291986461)
- ICTjournal (2021-11-09): [L'agence digitale romande Coteries lance une alternative francophone à GPT-3](https://www.ictjournal.ch/articles/2021-11-09/lagence-digitale-romande-coteries-lance-une-alternative-francophone-a-gpt-3)
- 24 heures: [L'intelligence artificielle arrive au service de l'écriture](https://www.24heures.ch/lintelligence-artificielle-arrive-au-service-de-lecriture-416348520640)
- Bilan: [Cedille veut révolutionner l'écriture basée sur le machine learning](https://www.bilan.ch/story/cedille-veut-revolutionner-lecriture-basee-sur-le-machine-learning-298273365868)
- Startupticker: [Swiss startup launches milestone French language model](https://www.startupticker.ch/en/news/swiss-startup-launches-milestone-french-language-model)
- SNGLR: [Cedille, the largest French AI language model, is actually from Switzerland](https://blog.snglr.group/cedille-the-largest-french-ai-language-model-is-actually-from-switzerland/)

## Hacker News: Show HN: Cedille, the largest French language model, released in open source
240 pts, 57 comments, 2021-11-10: https://news.ycombinator.com/item?id=29179429

Your post (verbatim):

We are excited to announce Cedille, the largest language model for French (6b parameters).

Demo: https://cedille.ai

Language models are general purpose AI systems that are able to solve a range of tasks by simply being prompted for it. It can be used for example to summarize text, do translations, or for idea generation & overcoming writer's block.

You may know GPT-3, the humongous model from OpenAI. Cedille is a similar model targeting the French demographic - but smaller, as we don’t yet have $1b in the bank like they do. Although GPT-3 supports multiple languages including French, our model is competitive with GPT-3 on a range of French tasks! Plus, of course we’re open source while they keep their model closed and heavily restrict access to it.

You can try it out right away from our playground: https://app.cedille.ai

We are proponents of “open AI” and as such have released a checkpoint for the world to use (MIT license): https://github.com/coteries/cedille-ai

One of the problems with large language models is the potentially toxic, sexist or in other ways unpleasant output. We tried our best to avoid this issue by doing extensive dataset filtering. As a result, our benchmark indicates that Cedille is indeed less toxic than GPT-3.

Your comments (2, verbatim):

- Some acknowledgements!
  
  - Cedille is based on GPT-J, a model developed by the grassroot EleutherAI team: https://arankomatsuzaki.wordpress.com/2021/06/04/gpt-j/
  
  - Cedille was also generously supported by the Google TRC program: https://sites.research.google/trc/about/
- Yeah, this kind of toxic output sadly still can happen :-/
  
  We have fully analyzed the training dataset (1128 GB) using Detoxify (https://github.com/unitaryai/detoxify) to filter out problematic content. But of course detecting toxicity is a tough challenge in itself, so this process is imperfect at best.
  
  We are using the RealToxicityPrompt framework (https://realtoxicityprompts.apps.allenai.org/) to analyse how toxic our models are and to steer our efforts in this direction. This means we are generating thousands of completions and analysing them to see how "nasty" the model is. We plan to write more on this topic soon.
  
  But yeah, this is definitely far from being a solved problem, and our model (as well as all large language models) should be handled with care.

What others said (analysis):

- Mostly French speakers playing with the playground and posting generations: poetic or funny continuations of Renaud's song, Camus' L'Étranger, Hugo's "Demain, dès l'aube", a jazz-musician developer, recipes (tarte aux poireaux), Santa letters; grammar nerding (gender agreement of "pris/prise").
- Training-data artefacts: generations drifting into forum boilerplate ("Posté le…", "Posté par Marie, 21 mai 2012") and recipe-blog comments.
- Toxicity: a user got racist output → your reply about filtering the 1128 GB dataset with Detoxify; follow-up questions on how much was filtered and the thresholds; a parallel debate on whether models should be "sanitized" at all (bias, culture-dependent norms).
- Questions: compute needed for GPT-3 scale, training data/tokens/hardware, whether French is harder than English.
- One criticism: the "$1b in the bank" line read as sour grapes.

-->
