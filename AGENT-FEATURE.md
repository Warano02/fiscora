# Agent — Reconnaissance de fonctionnalité : About page

But: fournir à l'agent une description claire pour repérer et implémenter la fonctionnalité "About".

But/Contexte
- Tâche ciblée : "Implement About page content" (voir `PROGRESS.md` / TODOs).
- Locale : pages localisées sous `app/[locale]/about` (fr + en).

Comment reconnaître la tâche (checks que l'agent doit faire)
1. Ouvrir `PROGRESS.md` et lire la TODO list : si "Implement About page content" est `not-started` ou `in-progress`, choisir-la.
2. Vérifier l'existence de `app/[locale]/about/page.tsx`. Si le fichier est absent ou contient uniquement un placeholder, la tâche est valide.
3. Vérifier les traductions : `src/messages/fr/About.json` et `src/messages/en/About.json` doivent contenir les clés nécessaires (`eyebrow`, `heading`, `body`, `points`, `stat`).

Fichiers à modifier/créer
- `app/[locale]/about/page.tsx` — page serveur localisée.
- `src/components/sections/about.tsx` — composant de section réutilisable (hero/about block).
- `src/messages/{fr,en}/About.json` — contenu localisé pour la page.
- `src/components/layout/section.tsx` (si besoin) — wrapper de section.

Critères d'acceptation
- La page About est accessible à `/fr/about` et `/en/about`.
- `next build` réussit (pages statiques générées).
- Contenu traduit affiché correctement (vérifier `eyebrow`, `heading`, `body` et la liste `points`).
- Composant respecte l'UI kit : responsive, accessible (headings, landmarks), et réutilisable.

Étapes recommandées
1. Générer/éditer `src/messages/{fr,en}/About.json` avec le contenu fourni par le produit.
2. Créer `src/components/sections/about.tsx` : API claire (props pour eyebrow, heading, body, points, stat) et styles conformes à `Claude.md`.
3. Mettre à jour/implémenter `app/[locale]/about/page.tsx` pour utiliser `getTranslations` et rendre le composant `About`.
4. Lancer `next build` et corriger les erreurs.

Remarques pour l'agent
- Si la clé existe déjà dans les messages mais est vide, pré-remplir avec un placeholder clair et marquer en TODO.
- Mettre à jour `PROGRESS.md` et le todo list (via `/memories/` ou `manage_todo_list`) lorsque la tâche est commencée/terminée.

Accepté par le mainteneur si : pages générées et commit/push sur la branche `main` avec message clair.
