type Person = {
    name: string;
};

export async function getPerson(): Promise<Person> {
    try {
        const response = await fetch('https://swapi.info/api/people/1');
        if (!response.ok) {
            throw new Error(`Http error! Status: ${response.status}`);
        }

        const data: any = await response.json();

        if (!data.name || typeof data.name !== 'string') {
            throw new Error('Fetch data is missing');
        }

        return { name: data.name };
    } catch (error) {
        console.error('failed to fetch person data:', error);
        throw error;
    }
}