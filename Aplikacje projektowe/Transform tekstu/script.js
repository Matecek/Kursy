/*

url do api:
`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`

zwraca:
{
    "responseData": {
        "translatedText": "Hello, welcome to the new course",
        "match": 0.85
    }
}

*/

class Translator {
    constructor() {
        this.sourceTextField = document.getElementById('source-text');
        this.translatedTextField = document.getElementById('translated-text');
        this.translateButton = document.getElementById('translate-btn');
        this.sourceLanguageSelect = document.getElementById('source-lang');
        this.targetLanguageSelect = document.getElementById('target-lang');
        
        this.initializeLanguageOptions();
        this.addEventListeners();
    }

    initializeLanguageOptions() {
        const languageOptions = {
            "en": "Angielski",
            "pl": "Polski",
            "de": "Niemiecki",
            "fr": "Francuski"
            // Dodaj więcej języków zgodnie z potrzebą
        };

        Object.entries(languageOptions).forEach(([code, name]) => {
            let sourceOption = document.createElement('option');
            let targetOption = document.createElement('option');
            sourceOption.value = targetOption.value = code;
            sourceOption.textContent = targetOption.textContent = name;
            this.sourceLanguageSelect.appendChild(sourceOption);
            this.targetLanguageSelect.appendChild(targetOption);
        });
    }

    addEventListeners() {
        this.translateButton.addEventListener('click', () => this.translate());
        this.sourceTextField.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.translate();
            }
        });
    }

    translate() {
        const text = this.sourceTextField.value.trim();
        const fromLang = this.sourceLanguageSelect.value;
        const toLang = this.targetLanguageSelect.value;

        if (!text) return;
        this.translatedTextField.setAttribute("placeholder", "Tłumaczenie...");
        const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLang}|${toLang}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.translatedTextField.value = data.responseData.translatedText;
                data.matches.forEach(match => {
                    if (match.id === 0) {
                        this.translatedTextField.value = match.translation;
                    }
                });
                this.translatedTextField.setAttribute("placeholder", "Tłumaczenie");
            })
            .catch(error => {
                console.error("Error:", error);
                this.translatedTextField.value = 'Błąd w tłumaczeniu.';
                this.translatedTextField.setAttribute("placeholder", "Tłumaczenie");
            });
    }
}

document.addEventListener('DOMContentLoaded', () => new Translator());












