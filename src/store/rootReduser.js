import { combineReducers } from 'redux';
import persons from './persons/persons';
import person from './person/person';

const rootReduser = combineReducers({ persons, person });

export default rootReduser;
