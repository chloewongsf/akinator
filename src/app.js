const emotionTrees = [
    // Tree 1: Energy-based path
    {
    question: "does this feeling give you energy or drain it?",
    color: "#F5F5F5",
    yes: {
        question: "is it a restless kind of energy?",
        color: "#FFEDD5",
        yes: {
            question: "is it because you're waiting for something?",
            color: "#FDE68A",
            yes: {
                result: "anxiety",
                color: "#C084FC",
                followUp: {
                    question: "is it more like racing thoughts you can't control?",
                    yes: "overwhelm",
                    no: "stress"
                }
            },
            no: {
                result: "restlessness",
                color: "#D1D5DB",
                followUp: {
                    question: "is it because you're waiting for something?",
                    yes: "anxiety",
                    no: "boredom"
                }
            }
        },
        no: {
            question: "does it make you want to move or act?",
            color: "#FEF3C7",
            yes: {
                result: "excitement",
                color: "#FCD34D",
                followUp: {
                    question: "is it more about something you're looking forward to?",
                    yes: "hope",
                    no: "joy"
                }
            },
            no: {
                result: "joy",
                color: "#FDE047",
                followUp: {
                    question: "is it about being with people you care about?",
                    yes: "love",
                    no: "contentment"
                }
            }
        }
    },
    no: {
        question: "is it a heavy, tired feeling?",
        color: "#E0E7FF",
        yes: {
            question: "is it from pushing too hard?",
            color: "#9CA3AF",
            yes: {
                result: "burnout",
                color: "#9CA3AF",
                followUp: {
                    question: "does it feel more emotional than physical?",
                    yes: "apathy",
                    no: "exhaustion"
                }
            },
            no: {
                question: "does it feel like carrying something heavy?",
                yes: {
                    result: "sadness",
                    color: "#818CF8",
                    followUp: {
                        question: "is it a deep, lingering kind of sadness?",
                        yes: "melancholy",
                        no: "disappointment"
                    }
                },
                no: {
                    result: "exhaustion",
                    color: "#D1D5DB",
                    followUp: {
                        question: "is it because you haven't been taking care of yourself?",
                        yes: "burnout",
                        no: "boredom"
                    }
                }
            }
        },
        no: {
            question: "is everything just kind of flat?",
            yes: {
                result: "apathy",
                color: "#94A3B8"
            },
            no: {
                result: "calm",
                color: "#E0E7FF"
            }
        }
    }
},

// Tree 2: About someone else vs yourself
{
    question: "is this feeling mostly about someone else?",
    color: "#F5F5F5",
    yes: {
        question: "is it a warm feeling toward them?",
        color: "#D1FAE5",
        yes: {
            question: "did they do something for you?",
            yes: {
                result: "gratitude",
                color: "#6EE7B7"
            },
            no: {
                question: "does it feel like deep connection?",
                yes: {
                    result: "love",
                    color: "#FBD5D5"
                },
                no: {
                    result: "admiration",
                    color: "#BFDBFE"
                }
            }
        },
        no: {
            question: "do you want to push back at them?",
            color: "#FECACA",
            yes: {
                result: "anger",
                color: "#EF4444",
                followUp: {
                    question: "is it mixed with feeling hurt or betrayed?",
                    yes: "resentment",
                    no: "frustration"
                }
            },
            no: {
                question: "do they have something you want?",
                yes: {
                    result: "jealousy",
                    color: "#FB923C"
                },
                no: {
                    result: "resentment",
                    color: "#F87171"
                }
            }
        }
    },
    no: {
        question: "is it about something that might happen?",
        color: "#DDD6FE",
        yes: {
            question: "can you picture the specific thing?",
            yes: {
                result: "fear",
                color: "#A78BFA",
                followUp: {
                    question: "is it about failing or not being good enough?",
                    yes: "insecurity",
                    no: "anxiety"
                }
            },
            no: {
                result: "anxiety",
                color: "#C084FC",
                followUp: {
                    question: "is it more like racing thoughts you can't control?",
                    yes: "overwhelm",
                    no: "stress"
                }
            }
        },
        no: {
            question: "is it about something you did?",
            yes: {
                question: "do you wish you could take it back?",
                yes: {
                    result: "regret",
                    color: "#FDA4AF"
                },
                no: {
                    result: "pride",
                    color: "#FBBF24",
                    followUp: {
                        question: "okay, is it more about wanting recognition from others?",
                        yes: "admiration",
                        no: "joy"
                    }
                }
            },
            no: {
                question: "does it feel kind of empty?",
                yes: {
                    result: "loneliness",
                    color: "#64748B",
                    followUp: {
                        question: "is it because you feel misunderstood?",
                        yes: "insecurity",
                        no: "sadness"
                    }
                },
                no: {
                    result: "calm",
                    color: "#E0E7FF"
                }
            }
        }
    }
},

// Tree 3: Time-based (past/present/future)
{
    question: "is this about something happening right now?",
    color: "#F5F5F5",
    yes: {
        question: "is it intense?",
        color: "#FECACA",
        yes: {
            question: "does it make you want to act?",
            yes: {
                result: "anger",
                color: "#EF4444",
                followUp: {
                    question: "is it mixed with feeling hurt or betrayed?",
                    yes: "resentment",
                    no: "frustration"
                }
            },
            no: {
                question: "is it bigger than you?",
                yes: {
                    result: "awe",
                    color: "#FDBA74",
                    followUp: {
                        question: "is it more spiritual or connected to nature?",
                        yes: "calm",
                        no: "curiosity"
                    }
                },
                no: {
                    result: "overwhelm",
                    color: "#C7D2FE",
                    followUp: {
                        question: "is it more about decisions than tasks?",
                        yes: "confusion",
                        no: "stress"
                    }
                }
            }
        },
        no: {
            question: "is it pleasant?",
            yes: {
                result: "joy",
                color: "#FDE047",
                followUp: {
                    question: "is it about being with people you care about?",
                    yes: "love",
                    no: "contentment"
                }
            },
            no: {
                question: "is it more numb than painful?",
                yes: {
                    result: "apathy",
                    color: "#94A3B8"
                },
                no: {
                    result: "boredom",
                    color: "#CBD5E1"
                }
            }
        }
    },
    no: {
        question: "is it about the past?",
        yes: {
            question: "do you wish things went differently?",
            yes: {
                question: "did you hurt someone?",
                yes: {
                    result: "guilt",
                    color: "#FB7185"
                },
                no: {
                    result: "regret",
                    color: "#FDA4AF"
                }
            },
            no: {
                question: "was it better back then?",
                yes: {
                    result: "nostalgia",
                    color: "#8B5CF6"
                },
                no: {
                    result: "contentment",
                    color: "#BAE6FD"
                }
            }
        },
        no: {
            question: "are you worried about it?",
            yes: {
                result: "anxiety",
                color: "#C084FC",
                followUp: {
                    question: "is it more like racing thoughts you can't control?",
                    yes: "overwhelm",
                    no: "stress"
                }
            },
            no: {
                question: "does it feel like things could improve?",
                yes: {
                    result: "hope",
                    color: "#DDD6FE"
                },
                no: {
                    result: "curiosity",
                    color: "#93C5FD"
                }
            }
        }
    }
},

// Tree 4: Original positive/negative split
{
    question: "would you say this feeling is more positive?",
    color: "#F5F5F5",
    yes: {
        question: "does it have a lot of energy to it?",
        color: "#FFEDD5",
        yes: {
            question: "is it tied to something you did or achieved?",
            color: "#FDE68A",
            yes: {
                result: "pride",
                color: "#FBBF24",
                followUp: {
                    question: "okay, is it more about wanting recognition from others?",
                    yes: "admiration",
                    no: "joy"
                }
            },
            no: {
                question: "does it make you want to jump around or do something?",
                color: "#FEF3C7",
                yes: {
                    result: "excitement",
                    color: "#FCD34D",
                    followUp: {
                        question: "is it more about something you're looking forward to?",
                        yes: "hope",
                        no: "joy"
                    }
                },
                no: {
                    question: "is it bigger than you, almost overwhelming?",
                    yes: {
                        result: "awe",
                        color: "#FDBA74",
                        followUp: {
                            question: "is it more spiritual or connected to nature?",
                            yes: "calm",
                            no: "curiosity"
                        }
                    },
                    no: {
                        result: "joy",
                        color: "#FDE047",
                        followUp: {
                            question: "is it about being with people you care about?",
                            yes: "love",
                            no: "contentment"
                        }
                    }
                }
            }
        },
        no: {
            question: "is it about another person?",
            color: "#D1FAE5",
            yes: {
                question: "are you thinking about something they did for you?",
                color: "#A7F3D0",
                yes: { result: "gratitude", color: "#6EE7B7" },
                no: {
                    question: "is there warmth or deep connection there?",
                    yes: { result: "love", color: "#FBD5D5" },
                    no: { result: "admiration", color: "#BFDBFE" }
                }
            },
            no: {
                question: "does everything feel settled and okay?",
                color: "#E0F2FE",
                yes: { result: "contentment", color: "#BAE6FD" },
                no: {
                    question: "is it more like something bad just stopped?",
                    yes: { result: "relief", color: "#CFFAFE" },
                    no: {
                        question: "do you feel like the future looks brighter?",
                        yes: { result: "hope", color: "#DDD6FE" },
                        no: { result: "calm", color: "#E0E7FF" }
                    }
                }
            }
        }
    },
    no: {
        question: "does your body feel tense right now?",
        color: "#E2E8F0",
        yes: {
            question: "is it because of someone else?",
            color: "#FECACA",
            yes: {
                question: "do you want to yell or fight back?",
                color: "#FCA5A5",
                yes: {
                    result: "anger",
                    color: "#EF4444",
                    followUp: {
                        question: "is it mixed with feeling hurt or betrayed?",
                        yes: "resentment",
                        no: "frustration"
                    }
                },
                no: {
                    question: "do they have something you wish was yours?",
                    yes: { result: "jealousy", color: "#FB923C" },
                    no: { result: "resentment", color: "#F87171" }
                }
            },
            no: {
                question: "is it about something that hasn't happened yet?",
                color: "#DDD6FE",
                yes: {
                    question: "can you picture the specific bad thing?",
                    yes: {
                        result: "fear",
                        color: "#A78BFA",
                        followUp: {
                            question: "is it about failing or not being good enough?",
                            yes: "insecurity",
                            no: "anxiety"
                        }
                    },
                    no: {
                        result: "anxiety",
                        color: "#C084FC",
                        followUp: {
                            question: "is it more like racing thoughts you can't control?",
                            yes: "overwhelm",
                            no: "stress"
                        }
                    }
                },
                no: {
                    question: "is it about something you did in the past?",
                    yes: {
                        question: "do you wish you could take it back because it hurt someone?",
                        yes: { result: "guilt", color: "#FB7185" },
                        no: { result: "regret", color: "#FDA4AF" }
                    },
                    no: {
                        question: "is it from having too many things to handle?",
                        yes: {
                            question: "does it feel like constant pressure that won't stop?",
                            yes: {
                                result: "stress",
                                color: "#F472B6",
                                followUp: {
                                    question: "is it more about deadlines and time running out?",
                                    yes: "pressure",
                                    no: "overwhelm"
                                }
                            },
                            no: {
                                result: "pressure",
                                color: "#EC4899",
                                followUp: {
                                    question: "is it about meeting expectations?",
                                    yes: "anxiety",
                                    no: "stress"
                                }
                            }
                        },
                        no: { result: "frustration", color: "#EA580C" }
                    }
                }
            }
        },
        no: {
            question: "does it feel like you're carrying something heavy?",
            color: "#E0E7FF",
            yes: {
                question: "did something specific happen that let you down?",
                color: "#CBD5E1",
                yes: {
                    question: "were you expecting it to go differently?",
                    yes: {
                        result: "disappointment",
                        color: "#94A3B8",
                        followUp: {
                            question: "is it more about letting yourself down?",
                            yes: "regret",
                            no: "sadness"
                        }
                    },
                    no: {
                        result: "sadness",
                        color: "#818CF8",
                        followUp: {
                            question: "is it a deep, lingering kind of sadness?",
                            yes: "melancholy",
                            no: "disappointment"
                        }
                    }
                },
                no: {
                    question: "is it more like someone or something is absent?",
                    yes: {
                        question: "is it a specific place or people from home?",
                        yes: {
                            result: "homesickness",
                            color: "#8B5CF6",
                            followUp: {
                                question: "is it more about missing a person than a place?",
                                yes: "loneliness",
                                no: "melancholy"
                            }
                        },
                        no: {
                            result: "loneliness",
                            color: "#64748B",
                            followUp: {
                                question: "is it because you feel misunderstood?",
                                yes: "insecurity",
                                no: "sadness"
                            }
                        }
                    },
                    no: {
                        question: "do you feel like everyone can see through you?",
                        yes: { result: "shame", color: "#F472B6" },
                        no: {
                            question: "is it more like you're not good enough?",
                            yes: { result: "insecurity", color: "#EC4899" },
                            no: { result: "melancholy", color: "#A5B4FC" }
                        }
                    }
                }
            },
            no: {
                question: "are you just completely drained?",
                color: "#F1F5F9",
                yes: {
                    question: "is it from pushing yourself too hard for too long?",
                    yes: {
                        result: "burnout",
                        color: "#9CA3AF",
                        followUp: {
                            question: "does it feel more emotional than physical?",
                            yes: "apathy",
                            no: "exhaustion"
                        }
                    },
                    no: {
                        result: "exhaustion",
                        color: "#D1D5DB",
                        followUp: {
                            question: "is it because you haven't been taking care of yourself?",
                            yes: "burnout",
                            no: "boredom"
                        }
                    }
                },
                no: {
                    question: "does everything just feel kind of...flat?",
                    yes: {
                        question: "is nothing really catching your interest?",
                        yes: { result: "boredom", color: "#CBD5E1" },
                        no: { result: "apathy", color: "#94A3B8" }
                    },
                    no: {
                        question: "are you having trouble making sense of things?",
                        yes: {
                            question: "but in a way where you want to understand?",
                            yes: { result: "curiosity", color: "#93C5FD" },
                            no: { result: "confusion", color: "#BAE6FD" }
                        },
                        no: {
                            question: "is there just too much going on?",
                            yes: {
                                result: "overwhelm",
                                color: "#C7D2FE",
                                followUp: {
                                    question: "is it more about decisions than tasks?",
                                    yes: "confusion",
                                    no: "stress"
                                }
                            },
                            no: {
                                result: "restlessness",
                                color: "#D1D5DB",
                                followUp: {
                                    question: "is it because you're waiting for something?",
                                    yes: "anxiety",
                                    no: "boredom"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}]; // Close the emotionTrees array

// Randomly select a tree at the start
const selectedTree = emotionTrees[Math.floor(Math.random() * emotionTrees.length)];
const emotionTree = selectedTree;

const emotionDescriptions = {
    pride: "\"pride is holding your head up when everyone around you has theirs bowed. courage is what makes you do it.\" — bryce courtenay",
    excitement: "\"we love because it's the only true adventure.\" — nikki giovanni",
    awe: "\"those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts.\" — rachel carson",
    joy: "\"joy is what happens when we allow ourselves to recognize how good things really are.\" — marianne williamson",
    gratitude: "\"gratitude is not only the greatest of virtues, but the parent of all others.\" — cicero",
    love: "\"love is that condition in which the happiness of another person is essential to your own.\" — robert heinlein",
    admiration: "\"we are what we pretend to be, so we must be careful about what we pretend to be.\" — kurt vonnegut",
    contentment: "\"contentment is natural wealth, luxury is artificial poverty.\" — socrates",
    relief: "\"there is no relief so sweet as the removal of pain.\" — jean paul",
    hope: "\"hope is being able to see that there is light despite all of the darkness.\" — desmond tutu",
    calm: "\"within you there is a stillness and a sanctuary to which you can retreat at any time.\" — hermann hesse",
    anger: "\"anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.\" — mark twain",
    jealousy: "\"jealousy is simply and clearly the fear that you do not have value.\" — jennifer james",
    resentment: "\"resentment is like drinking poison and waiting for the other person to die.\" — carrie fisher",
    fear: "\"fear is the mind-killer. fear is the little-death that brings total obliteration.\" — frank herbert",
    anxiety: "\"anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.\" — charles spurgeon",
    guilt: "\"guilt is perhaps the most painful companion of death.\" — coco chanel",
    regret: "\"make the most of your regrets; never smother your sorrow, but tend and cherish it till it comes to have a separate and integral interest.\" — henry david thoreau",
    stress: "\"the greatest weapon against stress is our ability to choose one thought over another.\" — william james",
    pressure: "\"pressure is a word that is misused in our vocabulary. when you start thinking of pressure, it's because you've started to think of failure.\" — tommy lasorda",
    frustration: "\"frustration, although quite painful at times, is a very positive and essential part of success.\" — bo bennett",
    disappointment: "\"disappointment is a sort of bankruptcy - the bankruptcy of a soul that expends too much in hope and expectation.\" — eric hoffer",
    sadness: "\"the word 'happy' would lose its meaning if it were not balanced by sadness.\" — carl jung",
    homesickness: "\"homesickness is just a state of mind for me. i'm always missing someone or someplace or something.\" — elizabeth wurtzel",
    nostalgia: "\"nostalgia is a file that removes the rough edges from the good old days.\" — doug larson",
    loneliness: "\"the eternal quest of the individual human being is to shatter his loneliness.\" — norman cousins",
    shame: "\"shame is the most powerful, master emotion. it's the fear that we're not good enough.\" — brené brown",
    insecurity: "\"the worst loneliness is to not be comfortable with yourself.\" — mark twain",
    melancholy: "\"melancholy were the sounds on a winter's night.\" — virginia woolf",
    burnout: "\"it's not the load that breaks you down, it's the way you carry it.\" — lou holtz",
    exhaustion: "\"rest when you're weary. refresh and renew yourself, your body, your mind, your spirit. then get back to work.\" — ralph marston",
    boredom: "\"boredom is the feeling that everything is a waste of time; serenity, that nothing is.\" — thomas szasz",
    apathy: "\"the opposite of love is not hate, it's indifference.\" — elie wiesel",
    curiosity: "\"i have no special talent. i am only passionately curious.\" — albert einstein",
    confusion: "\"confusion is a word we have invented for an order which is not understood.\" — henry miller",
    overwhelm: "\"you don't have to see the whole staircase, just take the first step.\" — martin luther king jr.",
    restlessness: "\"restlessness is discontent and discontent is the first necessity of progress.\" — thomas edison"
};

let currentNode = emotionTree;
let history = [];
let maxDepth = 0;
let wrongGuesses = 0;
let inFollowUp = false;
let followUpNode = null;

function calculateMaxDepth(node, depth = 0) {
    if (node.result) return depth;
    const yesDepth = node.yes ? calculateMaxDepth(node.yes, depth + 1) : depth;
    const noDepth = node.no ? calculateMaxDepth(node.no, depth + 1) : depth;
    return Math.max(yesDepth, noDepth);
}

function findEmotionNode(emotionName, node = null) {
    // If no node provided, search all trees
    if (!node) {
        for (let tree of emotionTrees) {
            const found = findEmotionNode(emotionName, tree);
            if (found) return found;
        }
        return null;
    }

    if (node.result === emotionName) return node;
    if (node.yes) {
        const found = findEmotionNode(emotionName, node.yes);
        if (found) return found;
    }
    if (node.no) {
        const found = findEmotionNode(emotionName, node.no);
        if (found) return found;
    }
    return null;
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progress = (history.length / maxDepth) * 100;
    progressBar.style.width = progress + '%';
}

function updateUI() {
    const bgContainer = document.getElementById('bg-container');
    const questionText = document.getElementById('question-text');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const confirmedContainer = document.getElementById('confirmed-container');
    const giveUpContainer = document.getElementById('give-up-container');
    const resultText = document.getElementById('result-text');
    const backBtn = document.getElementById('back-btn');

    bgContainer.style.backgroundColor = currentNode.color;

    if (inFollowUp && followUpNode) {
        // Show follow-up question
        resultContainer.classList.add('hidden');
        confirmedContainer.classList.add('hidden');
        giveUpContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        questionText.innerText = followUpNode.question;
        backBtn.classList.add('hidden');
    } else if (currentNode.result) {
        if (wrongGuesses >= 3) {
            questionContainer.classList.add('hidden');
            resultContainer.classList.add('hidden');
            confirmedContainer.classList.add('hidden');
            giveUpContainer.classList.remove('hidden');
        } else {
            questionContainer.classList.add('hidden');
            confirmedContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            giveUpContainer.classList.add('hidden');
            resultText.innerText = currentNode.result;
        }
    } else {
        resultContainer.classList.add('hidden');
        confirmedContainer.classList.add('hidden');
        giveUpContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        questionText.innerText = currentNode.question;

        // Show/hide back button
        if (history.length > 0) {
            backBtn.classList.remove('hidden');
        } else {
            backBtn.classList.add('hidden');
        }
    }

    updateProgress();
}

function handleAnswer(choice) {
    if (inFollowUp && followUpNode) {
        // Handle follow-up answer
        const targetEmotion = followUpNode[choice];
        const emotionNode = findEmotionNode(targetEmotion);
        if (emotionNode) {
            currentNode = emotionNode;
            inFollowUp = false;
            followUpNode = null;
            updateUI();
        }
    } else if (currentNode[choice]) {
        history.push({ node: currentNode, choice: choice });
        currentNode = currentNode[choice];
        updateUI();
    }
}

function goBack() {
    if (history.length > 0) {
        const previous = history.pop();
        currentNode = previous.node;
        updateUI();
    }
}

function confirmEmotion() {
    const confirmedContainer = document.getElementById('confirmed-container');
    const resultContainer = document.getElementById('result-container');
    const confirmedEmotion = document.getElementById('confirmed-emotion');
    const emotionDescription = document.getElementById('emotion-description');

    const emotion = currentNode.result;
    confirmedEmotion.innerText = emotion;
    emotionDescription.innerText = emotionDescriptions[emotion] || "you know yourself best.";

    resultContainer.classList.add('hidden');
    confirmedContainer.classList.remove('hidden');
}

function continueGame() {
    wrongGuesses++;

    if (wrongGuesses >= 3) {
        updateUI();
        return;
    }

    // Check if current result has a follow-up question
    if (currentNode.followUp) {
        inFollowUp = true;
        followUpNode = currentNode.followUp;
        updateUI();
    } else {
        // No follow-up, just go back
        goBack();
    }
}

function reset() {
    // Pick a new random tree
    const newTree = emotionTrees[Math.floor(Math.random() * emotionTrees.length)];
    currentNode = newTree;
    history = [];
    wrongGuesses = 0;
    inFollowUp = false;
    followUpNode = null;

    // Update maxDepth for the new tree
    maxDepth = calculateMaxDepth(newTree);

    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('confirmed-container').classList.add('hidden');
    document.getElementById('give-up-container').classList.add('hidden');
    updateUI();
}

// Initialize
maxDepth = calculateMaxDepth(emotionTree);
updateUI();