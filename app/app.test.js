const express = require('express');
const request = require('supertest');
const { app } = require('./index');

describe('Voting App', () => {
  it('should load the main page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Pizza Palace');
  });

  it('should increment vote for a restaurant', async () => {
    const res = await request(app).post('/vote').send({ restaurant: 'Pizza Palace' });
    expect(res.statusCode).toEqual(302);
    
    const getRes = await request(app).get('/');
    expect(getRes.text).toContain('1 votes');
  });
});
