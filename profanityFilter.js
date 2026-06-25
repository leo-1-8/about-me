/**
 * Profanity and Toxic-Language Filtering System
 * 
 * A comprehensive JavaScript class for detecting and filtering profanity
 * and toxic language in user input. Supports multiple languages, handles
 * common bypass methods, and provides both basic and regex-based detection.
 * 
 * @author Senior Web Developer
 * @version 1.0.0
 */

class ProfanityFilter {
    /**
     * Initialize the ProfanityFilter with custom options
     * 
     * @param {Object} options - Configuration options
     * @param {string} options.lang - Default language (default: 'en')
     * @param {string} options.censorChar - Character to replace profanity with (default: '*')
     * @param {boolean} options.throwOnDetection - Throw error on detection (default: false)
     * @param {Object} options.customWordLists - Custom word lists to merge with defaults
     */
    constructor(options = {}) {
        // Default configuration
        this.options = {
            lang: options.lang || 'en',
            censorChar: options.censorChar || '*',
            throwOnDetection: options.throwOnDetection || false,
            customWordLists: options.customWordLists || {}
        };

        // Initialize word lists for different languages
        this.wordLists = {
            en: {
                // Basic profanity words - easily updatable
                badWords: [
                    'fuck', 'shit', 'cunt', 'bitch', 'asshole', 'bastard', 'damn', 'hell',
                    'pussy', 'dick', 'cock', 'wanker', 'motherfucker', 'bollocks', 'prick',
                    'slut', 'whore', 'fag', 'nigger', 'chink', 'kike', 'retard', 'spastic',
                    'arse', 'bugger', 'bloody', 'crap', 'minger', 'suck', 'wank', 'jizz',
                    'smegma', 'turd', 'twat', 'goddamn', 'sonofabitch', 'douchebag', 'scumbag',
                    'pedo', 'rapist', 'incest', 'childporn', 'bestiality', 'zoophile',
                    'ass', 'crap', 'screw', 'piss', 'bastard', 'darn', 'heck',
                    // Filipino/Tagalog profanity words
                    'yawa', 'buysit', 'sapat', 'demonyo', 'bilat', 'bilatinamo', 'bweset', 'bwesit',
                    'kantutan', 'lolo', 'jakol', 'jabol', 'sex', 'cum', 'dick', 'pussy', 'vagina',
                    'tite', 'puke', 'putay', 'buto', 'tamod', 'nigga', 'negro', 'burat', 'boto', 'boset', 'shibal'
                ],
                // Toxic phrases and expressions
                toxicPhrases: [
                    'kill yourself', 'go die', 'commit suicide', 'end it all',
                    'worthless piece of shit', 'useless cunt', 'stupid bitch',
                    'dumb ass', 'fucking idiot', 'moron', 'imbecile', 'loser'
                ],
                // Regex patterns for bypass detection (leetspeak, spaced, symbols)
                regexPatterns: [
                    // Spaced letters: f u c k, f.u.c.k, f*u*c*k
                    /f\s*[\W_]*u\s*[\W_]*c\s*[\W_]*k/gi,
                    /s\s*[\W_]*h\s*[\W_]*i\s*[\W_]*t/gi,
                    /c\s*[\W_]*u\s*[\W_]*n\s*[\W_]*t/gi,
                    /b\s*[\W_]*i\s*[\W_]*t\s*[\W_]*c\s*[\W_]*h/gi,
                    /a\s*[\W_]*s\s*[\W_]*s\s*[\W_]*h\s*[\W_]*o\s*[\W_]*l\s*[\W_]*e/gi,
                    /d\s*[\W_]*i\s*[\W_]*c\s*[\W_]*k/gi,
                    /p\s*[\W_]*u\s*[\W_]*s\s*[\W_]*s\s*[\W_]*y/gi,
                    // Leetspeak patterns: f7ck, f@ck, fvcK, etc.
                    /f[4@7]u[cvk][k@]/gi,
                    /sh[1i!][t7]/gi,
                    /c[uu][n@]t/gi,
                    /b[1i!][t7][c@][h@]/gi,
                    /[a@4]ss[h@][0o]l[e3]/gi,
                    /d[1i!][c@][k@]/gi,
                    // Symbol replacement patterns
                    /\*+u\*+c\*+k/gi,
                    /s\*+h\*+i\*+t/gi,
                    /c\*+u\*+n\*+t/gi,
                    // Repeated characters for emphasis
                    /f+[u*]+c+[k*]+/gi,
                    /s+[h*]+i+[t*]+/gi,
                    // Common misspellings and variations
                    /phu[cq]k/gi,
                    /shi[i]+t/gi,
                    /f[a@][gq]/gi,
                    /n[i1!]+gg+[e3]r/gi
                ]
            },
            es: {
                // Spanish profanity words
                badWords: [
                    'joder', 'puta', 'coño', 'polla', 'cabrón', 'mierda', 'hostia',
                    'zorra', 'maricón', 'puto', 'pendejo', 'culero', 'chingar',
                    'pinche', 'verga', 'hijo de puta', 'concha', 'forro'
                ],
                toxicPhrases: [
                    'mátate', 'vete a la mierda', 'estúpido', 'inútil', 'mierda seca'
                ],
                regexPatterns: [
                    /j[o0]d[e3]r/gi,
                    /p[uu]t[a@]/gi,
                    /c[o0]ñ[o0]/gi,
                    /c[a@]br[o0]n/gi
                ]
            },
            fr: {
                // French profanity words
                badWords: [
                    'putain', 'merde', 'con', 'salope', 'enculé', 'bordel', 'couille',
                    'put', 'connard', 'enculer', 'fils de pute', 'trou du cul'
                ],
                toxicPhrases: [
                    'va te faire foutre', 'espèce de con', 'connasse'
                ],
                regexPatterns: [
                    /p[uu]t[a@][i1!]n/gi,
                    /m[e3]rd[e3]/gi,
                    /c[o0]n/gi
                ]
            }
        };

        // Merge custom word lists if provided
        this.mergeCustomWordLists();
    }

    /**
     * Merge custom word lists with default word lists
     */
    mergeCustomWordLists() {
        for (const lang in this.options.customWordLists) {
            if (!this.wordLists[lang]) {
                this.wordLists[lang] = {
                    badWords: [],
                    toxicPhrases: [],
                    regexPatterns: []
                };
            }
            
            const customList = this.options.customWordLists[lang];
            if (customList.badWords) {
                this.wordLists[lang].badWords = [
                    ...this.wordLists[lang].badWords,
                    ...customList.badWords
                ];
            }
            if (customList.toxicPhrases) {
                this.wordLists[lang].toxicPhrases = [
                    ...this.wordLists[lang].toxicPhrases,
                    ...customList.toxicPhrases
                ];
            }
            if (customList.regexPatterns) {
                this.wordLists[lang].regexPatterns = [
                    ...this.wordLists[lang].regexPatterns,
                    ...customList.regexPatterns
                ];
            }
        }
    }

    /**
     * Check if text contains profanity using basic word matching
     * 
     * @param {string} text - Text to check
     * @param {string} lang - Language code (default: uses constructor default)
     * @returns {boolean} - True if profanity detected
     */
    containsProfanity(text, lang = this.options.lang) {
        if (!text || typeof text !== 'string') return false;
        
        const wordList = this.wordLists[lang];
        if (!wordList) return false;

        const lowerText = text.toLowerCase();

        // Check basic bad words using word boundary matching
        for (const word of wordList.badWords) {
            const regex = new RegExp('\\b' + this.escapeRegex(word.toLowerCase()) + '\\b', 'i');
            if (regex.test(lowerText)) {
                return true;
            }
        }

        // Check toxic phrases (keep includes for multi-word phrases)
        for (const phrase of wordList.toxicPhrases) {
            if (lowerText.includes(phrase.toLowerCase())) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if text contains profanity using regex pattern detection
     * This catches bypass attempts like spaced letters, symbols, leetspeak
     * 
     * @param {string} text - Text to check
     * @param {string} lang - Language code (default: uses constructor default)
     * @returns {boolean} - True if profanity pattern detected
     */
    containsProfanityPattern(text, lang = this.options.lang) {
        if (!text || typeof text !== 'string') return false;
        
        const wordList = this.wordLists[lang];
        if (!wordList) return false;

        // Check regex patterns for bypass detection
        for (const pattern of wordList.regexPatterns) {
            if (pattern.test(text)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Comprehensive check using both basic and pattern detection
     * 
     * @param {string} text - Text to check
     * @param {string} lang - Language code (default: uses constructor default)
     * @returns {Object} - Detection result with details
     */
    detectProfanity(text, lang = this.options.lang) {
        const result = {
            hasProfanity: false,
            method: null,
            detectedWords: [],
            censoredText: null
        };

        if (!text || typeof text !== 'string') {
            return result;
        }

        // Check basic word matching
        if (this.containsProfanity(text, lang)) {
            result.hasProfanity = true;
            result.method = 'basic';
            result.detectedWords = this.findProfaneWords(text, lang);
        }

        // Check pattern detection
        if (this.containsProfanityPattern(text, lang)) {
            result.hasProfanity = true;
            if (!result.method) {
                result.method = 'pattern';
            } else {
                result.method = 'both';
            }
        }

        // Generate censored version
        result.censoredText = this.censor(text, lang);

        return result;
    }

    /**
     * Find all profane words in the text
     * 
     * @param {string} text - Text to search
     * @param {string} lang - Language code
     * @returns {Array} - Array of detected profane words
     */
    findProfaneWords(text, lang = this.options.lang) {
        const detected = [];
        const wordList = this.wordLists[lang];
        if (!wordList) return detected;

        const lowerText = text.toLowerCase();

        for (const word of wordList.badWords) {
            if (lowerText.includes(word.toLowerCase())) {
                detected.push(word);
            }
        }

        for (const phrase of wordList.toxicPhrases) {
            if (lowerText.includes(phrase.toLowerCase())) {
                detected.push(phrase);
            }
        }

        return [...new Set(detected)]; // Remove duplicates
    }

    /**
     * Replace profanity with censor character (*)
     * 
     * @param {string} text - Text to censor
     * @param {string} lang - Language code (default: uses constructor default)
     * @returns {string} - Censored text
     */
    censor(text, lang = this.options.lang) {
        if (!text || typeof text !== 'string') return text;
        
        const wordList = this.wordLists[lang];
        if (!wordList) return text;

        let censoredText = text;

        // Censor basic bad words
        for (const word of wordList.badWords) {
            const regex = new RegExp(this.escapeRegex(word), 'gi');
            censoredText = censoredText.replace(regex, (match) => {
                return this.options.censorChar.repeat(match.length);
            });
        }

        // Censor toxic phrases
        for (const phrase of wordList.toxicPhrases) {
            const regex = new RegExp(this.escapeRegex(phrase), 'gi');
            censoredText = censoredText.replace(regex, (match) => {
                return this.options.censorChar.repeat(match.length);
            });
        }

        // Censor pattern matches (bypass attempts)
        for (const pattern of wordList.regexPatterns) {
            censoredText = censoredText.replace(pattern, (match) => {
                return this.options.censorChar.repeat(match.length);
            });
        }

        return censoredText;
    }

    /**
     * Escape special regex characters for safe pattern matching
     * 
     * @param {string} string - String to escape
     * @returns {string} - Escaped string
     */
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Add custom bad words to a language's word list
     * 
     * @param {string} lang - Language code
     * @param {Array|string} words - Word(s) to add (string or array)
     */
    addBadWords(lang, words) {
        if (!this.wordLists[lang]) {
            this.wordLists[lang] = {
                badWords: [],
                toxicPhrases: [],
                regexPatterns: []
            };
        }

        const wordsArray = Array.isArray(words) ? words : [words];
        this.wordLists[lang].badWords.push(...wordsArray);
    }

    /**
     * Add custom toxic phrases to a language's word list
     * 
     * @param {string} lang - Language code
     * @param {Array|string} phrases - Phrase(s) to add (string or array)
     */
    addToxicPhrases(lang, phrases) {
        if (!this.wordLists[lang]) {
            this.wordLists[lang] = {
                badWords: [],
                toxicPhrases: [],
                regexPatterns: []
            };
        }

        const phrasesArray = Array.isArray(phrases) ? phrases : [phrases];
        this.wordLists[lang].toxicPhrases.push(...phrasesArray);
    }

    /**
     * Add custom regex patterns to a language's word list
     * 
     * @param {string} lang - Language code
     * @param {Array|RegExp} patterns - Pattern(s) to add (RegExp or array)
     */
    addRegexPatterns(lang, patterns) {
        if (!this.wordLists[lang]) {
            this.wordLists[lang] = {
                badWords: [],
                toxicPhrases: [],
                regexPatterns: []
            };
        }

        const patternsArray = Array.isArray(patterns) ? patterns : [patterns];
        this.wordLists[lang].regexPatterns.push(...patternsArray);
    }

    /**
     * Remove words from a language's word list
     * 
     * @param {string} lang - Language code
     * @param {Array|string} words - Word(s) to remove (string or array)
     */
    removeBadWords(lang, words) {
        if (!this.wordLists[lang]) return;

        const wordsArray = Array.isArray(words) ? words : [words];
        this.wordLists[lang].badWords = this.wordLists[lang].badWords.filter(
            word => !wordsArray.includes(word)
        );
    }

    /**
     * Get all bad words for a language
     * 
     * @param {string} lang - Language code
     * @returns {Array} - Array of bad words
     */
    getBadWords(lang = this.options.lang) {
        return this.wordLists[lang] ? [...this.wordLists[lang].badWords] : [];
    }

    /**
     * Get all toxic phrases for a language
     * 
     * @param {string} lang - Language code
     * @returns {Array} - Array of toxic phrases
     */
    getToxicPhrases(lang = this.options.lang) {
        return this.wordLists[lang] ? [...this.wordLists[lang].toxicPhrases] : [];
    }

    /**
     * Validate input and throw error if profanity detected (when enabled)
     * 
     * @param {string} text - Text to validate
     * @param {string} lang - Language code
     * @returns {boolean} - True if valid (no profanity)
     * @throws {Error} - If profanity detected and throwOnDetection is enabled
     */
    validate(text, lang = this.options.lang) {
        const detection = this.detectProfanity(text, lang);
        
        if (detection.hasProfanity) {
            if (this.options.throwOnDetection) {
                throw new Error(
                    `Profanity detected: ${detection.detectedWords.join(', ')}`
                );
            }
            return false;
        }
        
        return true;
    }

    /**
     * Set the default language
     * 
     * @param {string} lang - Language code
     */
    setLanguage(lang) {
        this.options.lang = lang;
    }

    /**
     * Set the censor character
     * 
     * @param {string} char - Character to use for censoring
     */
    setCensorChar(char) {
        this.options.censorChar = char;
    }
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProfanityFilter;
}
