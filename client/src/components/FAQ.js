import React, { Fragment } from 'react';

import { questions } from './data/questions';

import { Typography, Grid, Paper } from '@material-ui/core';
import './css/FAQ.css';

const FAQ = () => {
    return (
        <Fragment>
            <div className="faq-container">
                <Typography variant="h5">
                    Frequently Asked Questions
                </Typography>
                <div className="faq-body">
                    <Grid container spacing={3}>
                        {
                            questions.map(question =>
                                (
                                    <Grid item xs={12}>
                                        <Paper elevation={0} className="question-group">
                                            <div className="question-label">
                                                <Typography variant="h5" className="question-header"><strong>{question.question}</strong></Typography>
                                                {
                                                    question.id !== 8 ?
                                                        (<Typography className="question-answer">{question.answer}</Typography>) :
                                                        question.answer.map(ans =>
                                                            (
                                                                <div className="nested-answer">
                                                                    <Typography variant="subtitle2" className="question-answer use">{ans.use}</Typography>
                                                                    <Typography className="question-nested-answer">{ans.item}</Typography>
                                                                </div>

                                                            )
                                                        )
                                                }
                                            </div>
                                        </Paper>
                                        {/*
                                            questions.length !== question.id ?
                                                (<Divider className="faq-divider"></Divider>) : ''
                                        */}
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </div>
            </div>
        </Fragment >
    )
}

export default FAQ;