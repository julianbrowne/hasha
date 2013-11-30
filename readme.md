
####Hasha

Hasha is a simplistic example of how password hashing works.

	Hasha.hash(string);

Returns hash of string

	Hasha.salty(string);

Returns salted hash of string

The included index.html runs Hasha.hash() then Hasha.salty() against an array of pretend passwords. Showing that the password "password" will hash to the same thing consistently but with salting this doesn't happen, making salted/hashed passwords that little bit more protected against the various forms of pre-computed hash table type attacks.

	Hasha.print(string);

Adds string to HTML document body


