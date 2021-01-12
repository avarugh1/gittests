#!/bin/bash

echo "Checking for invalid text ~~~~~~~~~"
checks = ('testing')

git diff --cached --name-status | while read flag file; do
    if [ "$flag" == 'D' ]; then continue; fi

    for word in ${checks[@]}
    do
        if egrep -q "$word" "$file"; then
            echo "ERROR: Disallowed expression \"${word}\" in file: ${file}" >&2
            exit 1
        fi
    done
done