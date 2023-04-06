interface CustomConfig extends RequestInit {
    headers?: {
      [key: string]: string;
    };
  }
  
  export async function client<T>(
    endpoint: string,
    { body, ...customConfig }: CustomConfig = {}
  ): Promise<T> {
    const headers = { 'Content-Type': 'application/json' };
  
    const config: CustomConfig = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    };
  
    if (body) {
      config.body = JSON.stringify(body);
    }
  
    let data
    try {
      const response = await window.fetch(endpoint, config);
      data = await response.json();
      if (response.ok) {
        return data;
      }
      throw new Error(response.statusText);
    } catch ({err}: any) {
      return Promise.reject(err.message ? err.message : data);
    }
  }
  
  client.get = function <T>(endpoint: string, customConfig: CustomConfig = {}): Promise<T> {
    return client(endpoint, { ...customConfig, method: 'GET' });
  };
  
  client.post = function <T>(endpoint: string, body: any, customConfig: CustomConfig = {}): Promise<T> {
    return client(endpoint, { ...customConfig, body });
  };