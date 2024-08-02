import React, {useState} from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState(null);
    const [showTextBox, setShowTextBox] = useState(false);
    const [textBoxContent, setTextBoxContent] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleFeedback = (type) => {
        setFeedback(type);
        if (type === 'thumbs_down') {
            setShowTextBox(true);
        } else {
            setShowTextBox(false);
            sendFeedback(type, '');
        }
    };

    const handleTextBoxChange = (event) => {
        setTextBoxContent(event.target.value);
    };

    const sendFeedback = (type, text) => {
        if (window.gtag) {
            window.gtag('event', 'feedback', {
                event_category: 'Feedback',
                event_label: window.location.pathname,
                feedback_type: type,
                feedback_text: text,
            });
        }
        setSubmitted(true);
    };

    const handleSubmit = () => {
        sendFeedback(feedback, textBoxContent);
        setShowTextBox(false);
        setTextBoxContent('');
    };

    return (
        <div style={{ textAlign: 'left', marginBottom: '2vh' }}>
            {!submitted ? (
                <>
                    <p style={{ fontWeight: 'bold' }}>Was this article helpful?</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                            onClick={() => handleFeedback('thumbs_up')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: feedback === 'thumbs_up' ? 'var(--ifm-color-primary)' : 'gray',
                                backgroundColor: '#f0f0f0',
                                border: '1px #f0f0f0',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontFamily: 'var(--ifm-font-family-base)',
                                gap: '5px',
                            }}
                        >
                            👍 Yes
                        </button>
                        <button
                            onClick={() => handleFeedback('thumbs_down')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: feedback === 'thumbs_down' ? 'var(--ifm-color-primary)' : 'gray',
                                backgroundColor: '#f0f0f0',
                                border: '1px #f0f0f0',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontFamily: 'var(--ifm-font-family-base)',
                                gap: '5px',
                            }}
                        >
                            👎 No
                        </button>
                    </div>
                    {showTextBox && (
                        <div style={{ marginTop: '20px' }}>
                            <textarea
                                value={textBoxContent}
                                onChange={handleTextBoxChange}
                                placeholder="How can we make it better?"
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    padding: '10px',
                                    borderColor: 'lightgray',
                                    borderRadius: '8px',
                                    fontFamily: 'var(--ifm-font-family-base)',
                                }}
                            />
                            <button
                                onClick={handleSubmit}
                                style={{
                                    marginTop: '10px',
                                    padding: '10px 20px',
                                    backgroundColor: 'var(--ifm-color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--ifm-font-family-base)',
                                    borderRadius: '8px',
                                }}
                            >
                                Submit Feedback
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p style={{ fontWeight: 'bold', color: 'var(--ifm-color-primary)' }}>
                    Thank you for your feedback!
                </p>
            )}
        </div>
    );
};

export default Feedback;