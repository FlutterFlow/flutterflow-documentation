# Agent evaluation suites

`agent-intents.json` is the fixed canonical-intent set for FlutterFlow documentation retrieval and answerability.

Run the deterministic, no-network retrieval gate with:

```bash
npm run build
npm run eval:agent-retrieval
```

This gate deliberately excludes `ai_queries` from scoring. It evaluates titles, descriptions, public keywords, headings, body text, and canonical routes. The six fixed variants per intent are a regression suite, not a statistical claim about all possible user prompts.

Live ChatGPT or API answer accuracy is a separate evaluation because it sends documentation excerpts to an external model. Run it only through an approved evaluation system with an explicitly recorded answer model, evaluator model, dataset revision, sampling settings, and data-handling policy. Store per-intent answers and grades so failures can be reproduced.

The live evaluation must report answer correctness, citation support, and unsupported-claim rate separately from retrieval. A retrieval pass must never be presented as proof of live answer accuracy.
