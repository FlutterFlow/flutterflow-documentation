# Usage:
#   make staging                         # channel = current git branch, expires in 7d
#   make staging CHANNEL=my-channel      # custom channel name
#   make staging CHANNEL=my-channel EXPIRES=14d
#   make build                           # just build the site
#   make deploy-staging                  # deploy without rebuilding

SHELL := /usr/bin/env bash
.SHELLFLAGS := -eu -o pipefail -c

BRANCH  := $(shell git rev-parse --abbrev-ref HEAD)
CHANNEL ?= $(BRANCH)
EXPIRES ?= 7d

# Firebase channel IDs must match [a-zA-Z0-9_-]
SAFE_CHANNEL := $(shell echo "$(CHANNEL)" | tr '/' '-' | tr -c 'a-zA-Z0-9_-' '-' | sed 's/-\+/-/g; s/^-//; s/-$$//')

.PHONY: staging build deploy-staging check-firebase

staging: build deploy-staging

build:
	npm run build

deploy-staging: check-firebase
	@echo "Branch:  $(BRANCH)"
	@echo "Channel: $(SAFE_CHANNEL)"
	@echo "Expires: $(EXPIRES)"
	firebase hosting:channel:deploy "$(SAFE_CHANNEL)" --expires "$(EXPIRES)"

check-firebase:
	@command -v firebase >/dev/null 2>&1 || { \
		echo "firebase CLI not found. Install with: npm install -g firebase-tools" >&2; \
		exit 1; \
	}
