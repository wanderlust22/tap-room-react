import React from 'react';

const AddBeerForm = (props) => {
    let _title = null;
    let _style = null;
    let _abv = null;

    const handleNewAddBeerFormSubmission = (event) => {
        event.preventDefault();
        props.onAddingBeersToMaster({
            title: _title.value,
            style: _style.value,
            abv: _abv.value
        });
        _title.value = '';
        _style.value = '';
        _abv.value = '';
    };

    return(
        <div className="form-container">
            <form onSubmit={handleNewAddBeerFormSubmission}>
                <input
                type='text'
                id='names'
                placeholder='Beer Title'
                ref={input => {_title = input;}} />
                <input
                type='text'
                id='location'
                placeholder='Beer Style'
                ref={input => {_style = input;}} />
                <input
                id='issue'
                placeholder='ABV%'
                ref={input => {_abv = input;}} />
                <button type='submit'>Add the Beer!</button>
            </form>
            <style jsx>{`
                        .form-container {
                            margin: 30px;
                        }

                        form, input, textarea, button {
                            border-radius: 4px;
                        }

                        form {
                            width: 80%;
                            padding: 30px;
                            border: 1px solid #efefef;
                            margin: 0 auto;
                            display: flex;
                            flex-direction: column;
                        }

                        input, textarea, button {
                            width: 50%;
                            font-size: 18px;
                            margin: 0 auto;
                            margin-bottom: 30px;
                        }

                        textarea {
                            height: 5em;
                        }

                        button {
                            width: 20%;
                            height: 40px;
                        }
                    `}</style>
    </div>
    );
};

export default AddBeerForm;