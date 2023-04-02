/* --- Funskjoner for å skjule og vise seerliste eller filmliste --- */

export function addHidden(data)
{
    for (let x = 0; x < data.length; x++)
    {
        data[x].classList.add("hidden");
    }
};

export function removeHidden(data)
{
    for (let x = 0; x < data.length; x++)
    {
        data[x].classList.remove("hidden");
    }
};

/* --- END --- */