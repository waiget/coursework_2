import http from 'http';
(http as any).createServer = () => ({ listen: jest.fn() });
import { handleRequest } from './server';

const response = {
    setHeader: jest.fn(),
    writeHead: jest.fn(),
    write: jest.fn(),
    end: jest.fn()
}

describe('Unit Tests', () => {
    it('should return status 200', () => {
        handleRequest(null, response as any);
        expect(response.writeHead.mock.calls.length).toBe(1);
        expect(response.writeHead.mock.calls[0][0]).toBe(200);
    });
});
