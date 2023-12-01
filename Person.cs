namespace KB12342_BlazorWasmApp;

public class Person
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int Age { get; set; }

    public static readonly IEnumerable<Person> SampleData = [
        new(){ Id = 1, Name = "John", Age = 30 },
        new(){ Id = 2, Name = "Edward", Age = 60 },
        new(){ Id = 3, Name = "Robert", Age = 40 },
        new(){ Id = 4, Name = "Mary", Age = 35 },
        new(){ Id = 5, Name = "Susan", Age = 20 },
        new(){ Id = 6, Name = "James", Age = 45 },
        new(){ Id = 7, Name = "Patricia", Age = 50 },
        new(){ Id = 8, Name = "Michael", Age = 55 },
        new(){ Id = 9, Name = "Linda", Age = 25 },
        new(){ Id = 10, Name = "David", Age = 65 },
    ];
}
