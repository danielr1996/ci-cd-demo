- dont duplicate flux config like repos, policies, etc
- dont duplicate credentials
- distribute image pull secrets across all namespaces
- update tickets with relevant information
- execute tests and publish results to sonarqube
- kubernetes validating webhook to ensure only approved images can be deployed
- ensure that only allowed base images are used



# Zielsetzung
- entwickeln eines Zielbilds einer CI/CD/CD/GitOps Infrastruktur
- vergleich des Zielbilds mit dem Istzustand
- wichtige Eigenschaften solch einer Infrastruktur herausfinden
- iterative Annäherung an das Zielbild innerhalb der gegebenen Rahmenbedingungen

## Zielbild
- alle Informationen sind soweit möglich in Git enthalten und werden von dort in externe Systeme zielgruppengerecht exportiert

### Continuous Integration
#### Versionierung
- nächste Version wird anhand der Git History bestimmt und getaggt
- Versionierung nach semver und conventional commits
- tag wird nur erzeugt, wenn sich tatsächlich inhaltliche Änderungen ergeben haben, (feat, fix, BREAKING CHANGE),
aber nicht bei z.B. doc Änderungen
- in feature branches werden prereleases erstellt


#### Build
- Code Änderungen werden zusammengeführt und getestet

### Continuous Delivery
- Artefakte werden gebaut und veröffentlicht

### Continuous Deployment
- Artefakte werden deployed