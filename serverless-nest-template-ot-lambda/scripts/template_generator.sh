echo "Selecting template mode for using";
echo "CONCURENCY UNITS IS "$CONCURENCY_UNITS;
CONCURRENCY_HEADER_EXTRA=$(cat <<EOF
ProvisionedConcurencyUnits:
    Type: String
    Default: "0"
EOF
)

CONCURRENCY_EXTRA=$(cat <<EOF
ProvisionedConcurrencyConfig:
        ProvisionedConcurrentExecutions: !Ref ProvisionedConcurencyUnits
      AutoPublishAlias: live
EOF
)

if [ "$CONCURENCY_UNITS" -le "0" ]
then
    CONCURRENCY_HEADER_EXTRA=""
    CONCURRENCY_EXTRA=""
    echo "Template with concurency."
fi
echo "Template mode selected.";

# Замена значений в шаблоне
awk -v CONCURRENCY_HEADER_EXTRA="$CONCURRENCY_HEADER_EXTRA" '{gsub(/#CONCURRENCY_HEADER_EXTRA/,CONCURRENCY_HEADER_EXTRA)}1' './template.yaml' > temp_file && mv temp_file './template.yaml'
awk -v CONCURRENCY_EXTRA="$CONCURRENCY_EXTRA" '{gsub(/#CONCURRENCY_EXTRA/,CONCURRENCY_EXTRA)}1' './template.yaml' > temp_file && mv temp_file './template.yaml'