// import { Card, } from 'evergreen-ui';
import { Card } from 'evergreen-ui';
import React from 'react';

export default props => (<Card width={400} onClick={props.callBack} marginY={10} padding={5} display="flex" flexDirection="column" alignItems="center" max-width={400} marginX="auto" justifyContent="center" color="white" backgroundColor="darkcyan">{props.text}</Card>);

