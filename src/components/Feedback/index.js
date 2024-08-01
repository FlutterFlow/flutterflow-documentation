import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState(null);
    const [showTextBox, setShowTextBox] = useState(false);
    const [textBoxContent, setTextBoxContent] = useState('');

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
    };

    const handleSubmit = () => {
        sendFeedback(feedback, textBoxContent);
        setShowTextBox(false);
        setTextBoxContent('');
        alert('Thank you for your feedback!');
    };

    return (
        <div style={{ textAlign: 'left', marginBottom: '2vh' }}>
            <div style={{fontSize: '12px'}}>Was the content helpful?</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                    onClick={() => handleFeedback('thumbs_up')}
                    style={{
                        cursor: 'pointer',
                        color: feedback === 'thumbs_up' ? 'green' : 'gray',
                        fontSize: '24px',
                    }}
                >
                    👍
                </div>
                <div
                    onClick={() => handleFeedback('thumbs_down')}
                    style={{
                        cursor: 'pointer',
                        color: feedback === 'thumbs_down' ? 'red' : 'gray',
                        fontSize: '24px',
                    }}
                >
                    👎
                </div>
            </div>
            {showTextBox && (
                <div style={{ marginTop: '20px' }}>
                    <textarea
                        value={textBoxContent}
                        onChange={handleTextBoxChange}
                        placeholder="Please let us know why you didn't find the content helpful."
                        style={{
                            width: '100%',
                            height: '100px',
                            padding: '10px',
                            borderColor: 'lightgray',
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
                            borderRadius: '8px', // Rounded edges
                        }}
                    >
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default Feedback;