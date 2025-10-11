// Bad Words Filter Utility
// Filters inappropriate content in English and Tagalog

const englishBadWords = [
  'fuck', 'shit', 'bitch', 'damn', 'hell', 'ass', 'bastard', 'crap',
  'piss', 'slut', 'whore', 'dick', 'cock', 'pussy', 'nigger', 'fag',
  'retard', 'stupid', 'idiot', 'moron', 'dumb', 'kill', 'suicide',
  'die', 'death', 'murder', 'hate', 'violence'
];

const tagalogBadWords = [
  'putang', 'puta', 'tangina', 'gago', 'tanga', 'bobo', 'ulol', 'pakyu',
  'inutil', 'walang kwenta', 'tarantado', 'gunggong', 'hangal', 'bwisit',
  'peste', 'leche', 'kingina', 'hinayupak', 'animal ka', 'patay', 'mamatay',
  'punyeta', 'putragis', 'buwisit', 'hayop', 'diablos', 'putcha'
];

// Combine both language filters
const allBadWords = [...englishBadWords, ...tagalogBadWords];

/**
 * Checks if text contains any bad words
 * @param text - The text to check
 * @returns boolean - true if bad words found
 */
export function containsBadWords(text: string): boolean {
  const lowerText = text.toLowerCase();
  
  return allBadWords.some(badWord => {
    // Check for exact matches and word boundaries
    const regex = new RegExp(`\\b${badWord.toLowerCase()}\\b`, 'i');
    return regex.test(lowerText) || lowerText.includes(badWord.toLowerCase());
  });
}

/**
 * Filters out bad words by replacing them with asterisks
 * @param text - The text to filter
 * @returns string - Filtered text with bad words replaced
 */
export function filterBadWords(text: string): string {
  let filteredText = text;
  
  allBadWords.forEach(badWord => {
    const regex = new RegExp(`\\b${badWord}\\b`, 'gi');
    const replacement = '*'.repeat(badWord.length);
    filteredText = filteredText.replace(regex, replacement);
    
    // Also check for partial matches (without word boundaries)
    const partialRegex = new RegExp(badWord, 'gi');
    filteredText = filteredText.replace(partialRegex, replacement);
  });
  
  return filteredText;
}

/**
 * Gets a list of bad words found in the text
 * @param text - The text to analyze
 * @returns string[] - Array of bad words found
 */
export function getBadWordsFound(text: string): string[] {
  const lowerText = text.toLowerCase();
  const foundWords: string[] = [];
  
  allBadWords.forEach(badWord => {
    const regex = new RegExp(`\\b${badWord.toLowerCase()}\\b`, 'i');
    if (regex.test(lowerText) || lowerText.includes(badWord.toLowerCase())) {
      foundWords.push(badWord);
    }
  });
  
  return foundWords;
}

/**
 * Validates text for appropriateness in a mental health context
 * @param text - The text to validate
 * @returns object - Validation result with isValid and message
 */
export function validateMessageContent(text: string): {
  isValid: boolean;
  message?: string;
  filteredText?: string;
} {
  if (!text.trim()) {
    return { isValid: false, message: "Message cannot be empty." };
  }
  
  if (containsBadWords(text)) {
    const badWords = getBadWordsFound(text);
    return {
      isValid: false,
      message: `Your message contains inappropriate language. Please keep our community safe and supportive.`,
      filteredText: filterBadWords(text)
    };
  }
  
  // Additional mental health context validation
  const concerningPhrases = [
    'want to die', 'kill myself', 'end it all', 'not worth living',
    'better off dead', 'gusto ko nang mamatay', 'ayaw ko na mabuhay'
  ];
  
  const lowerText = text.toLowerCase();
  const hasConcerningContent = concerningPhrases.some(phrase => 
    lowerText.includes(phrase.toLowerCase())
  );
  
  if (hasConcerningContent) {
    return {
      isValid: false,
      message: "We care about your wellbeing. If you're having thoughts of self-harm, please reach out to a mental health professional or crisis hotline."
    };
  }
  
  return { isValid: true };
}