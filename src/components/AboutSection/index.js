const AboutSection = () => (
    <section
    id="about"
    className="p-8 md:p-16 bg-white grid grid-cols-1 md:grid-cols-2 justify-items-center"
  >
    <div>
      <h1 className="text-3xl font-semibold my-2">About Me</h1>
      <p className="text-gray-500 text-lg mt-2 leading-relaxed md:w-4/5">
        I have a bachelor's degree in Computer Science. Before I decided to
        become a web developer, I tried various professions and realized that
        my interest is only in computers, specifically colours and web
        development. Since then I've been building websites everyday. I found
        my happiness in making websites and love to develop responsive and
        engaging user interfaces! and I'm always up for learning new
        technologies and getting better at it on the way.
      </p>
      <p className="pt-2 font-semibold">
        Check Me Out On{" "}
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/swethapaleti"
          >
            <i className="fa-brands fa-github mx-2 text-xl transform transition duration-500 hover:scale-110 hover:text-pink-500 ease-in-out"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/swethapaleti"
          >
            <i className="fa-brands fa-linkedin text-xl transform transition duration-500 hover:scale-110 hover:text-pink-500 ease-in-out"></i>
          </a>
        </span>
      </p>
    </div>
    <div>
      <h1 className="text-3xl font-semibold my-2 text-center">Skills</h1>
      <div className="grid grid-cols-3 gap-8">
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI3N0JEIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDM5QkU1IiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMzLjEgMTNMMjQgMTMgMjQgMTcgMjguOSAxNyAyOC42IDIxIDI0IDIxIDI0IDI1IDI4LjQgMjUgMjguMSAyOS41IDI0IDMwLjkgMjQgMzUuMSAzMS45IDMyLjUgMzIuNiAyMSAzMi42IDIxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNEwxOS44LDI3eiI+PC9wYXRoPjwvc3ZnPg=="
        />
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRTY1MTAwIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkY2RDAwIiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0LDI1di00aDguNmwtMC43LDExLjVMMjQsMzUuMXYtNC4ybDQuMS0xLjRsMC4zLTQuNUgyNHogTTMyLjksMTdsMC4zLTRIMjR2NEgzMi45eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwzMC45djQuMmwtNy45LTIuNkwxNS43LDI3aDRsMC4yLDIuNUwyNCwzMC45eiBNMTkuMSwxN0gyNHYtNGgtOS4xbDAuNywxMkgyNHYtNGgtNC42TDE5LjEsMTd6Ij48L3BhdGg+PC9zdmc+"
        />
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
        />
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMjQsMzRDMTEuMSwzNCwxLDI5LjYsMSwyNGMwLTUuNiwxMC4xLTEwLDIzLTEwYzEyLjksMCwyMyw0LjQsMjMsMTBDNDcsMjkuNiwzNi45LDM0LDI0LDM0eiBNMjQsMTYJYy0xMi42LDAtMjEsNC4xLTIxLDhjMCwzLjksOC40LDgsMjEsOHMyMS00LjEsMjEtOEM0NSwyMC4xLDM2LjYsMTYsMjQsMTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTE1LjEsNDQuNmMtMSwwLTEuOC0wLjItMi42LTAuN0M3LjYsNDEuMSw4LjksMzAuMiwxNS4zLDE5bDAsMGMzLTUuMiw2LjctOS42LDEwLjMtMTIuNGMzLjktMyw3LjQtMy45LDkuOC0yLjUJYzIuNSwxLjQsMy40LDQuOSwyLjgsOS44Yy0wLjYsNC42LTIuNiwxMC01LjYsMTUuMmMtMyw1LjItNi43LDkuNi0xMC4zLDEyLjRDMTkuNyw0My41LDE3LjIsNDQuNiwxNS4xLDQ0LjZ6IE0zMi45LDUuNAljLTEuNiwwLTMuNywwLjktNiwyLjdjLTMuNCwyLjctNi45LDYuOS05LjgsMTEuOWwwLDBjLTYuMywxMC45LTYuOSwyMC4zLTMuNiwyMi4yYzEuNywxLDQuNSwwLjEsNy42LTIuM2MzLjQtMi43LDYuOS02LjksOS44LTExLjkJYzIuOS01LDQuOC0xMC4xLDUuNC0xNC40YzAuNS00LTAuMS02LjgtMS44LTcuOEMzNCw1LjYsMzMuNSw1LjQsMzIuOSw1LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTMzLDQ0LjZjLTUsMC0xMi4yLTYuMS0xNy42LTE1LjZDOC45LDE3LjgsNy42LDYuOSwxMi41LDQuMWwwLDBDMTcuNCwxLjMsMjYuMiw3LjgsMzIuNywxOQljMyw1LjIsNSwxMC42LDUuNiwxNS4yYzAuNyw0LjktMC4zLDguMy0yLjgsOS44QzM0LjcsNDQuNCwzMy45LDQ0LjYsMzMsNDQuNnogTTEzLjUsNS44Yy0zLjMsMS45LTIuNywxMS4zLDMuNiwyMi4yCWM2LjMsMTAuOSwxNC4xLDE2LjEsMTcuNCwxNC4yYzEuNy0xLDIuMy0zLjgsMS44LTcuOGMtMC42LTQuMy0yLjUtOS40LTUuNC0xNC40QzI0LjYsOS4xLDE2LjgsMy45LDEzLjUsNS44TDEzLjUsNS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiM4MGRlZWEiPjwvY2lyY2xlPjwvc3ZnPg=="
        />
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMjFhMzY2IiBkPSJNMjQuMDA3LDQ1LjQxOWMtMC41NzQsMC0xLjE0My0wLjE1LTEuNjQ2LTAuNDRsLTUuMjQtMy4xMDNjLTAuNzgzLTAuNDM4LTAuNDAxLTAuNTkzLTAuMTQzLTAuNjgyCWMxLjA0NC0wLjM2NSwxLjI1NS0wLjQ0OCwyLjM2OS0xLjA4MWMwLjExNy0wLjA2NywwLjI3LTAuMDQzLDAuMzksMC4wMjhsNC4wMjYsMi4zODljMC4xNDUsMC4wNzksMC4zNTIsMC4wNzksMC40ODYsMGwxNS42OTctOS4wNjEJYzAuMTQ1LTAuMDgzLDAuMjQtMC4yNTEsMC4yNC0wLjQyNFYxNC45MzJjMC0wLjE4MS0wLjA5NC0wLjM0Mi0wLjI0My0wLjQzMkwyNC4yNTMsNS40NDZjLTAuMTQ1LTAuMDg2LTAuMzM4LTAuMDg2LTAuNDgzLDAJTDguMDgyLDE0LjQ5OWMtMC4xNTIsMC4wODYtMC4yNDksMC4yNTUtMC4yNDksMC40Mjh2MTguMTE0YzAsMC4xNzMsMC4wOTQsMC4zMzgsMC4yNDQsMC40Mmw0LjI5OSwyLjQ4MwljMi4zMzQsMS4xNjcsMy43Ni0wLjIwOCwzLjc2LTEuNTkxVjE2LjQ3NmMwLTAuMjU1LDAuMi0wLjQ1MiwwLjQ1Ni0wLjQ1MmgxLjk4OGMwLjI0OCwwLDAuNDUyLDAuMTk2LDAuNDUyLDAuNDUydjE3Ljg4NgljMCwzLjExMi0xLjY5Nyw0LjktNC42NDgsNC45Yy0wLjkwOCwwLTEuNjIzLDAtMy42MTktMC45ODJsLTQuMTE4LTIuMzczQzUuNjI5LDM1LjMxNyw1LDM0LjIxNiw1LDMzLjA0MlYxNC45MjgJYzAtMS4xNzksMC42MjktMi4yNzksMS42NDYtMi44NjFMMjIuMzYsMy4wMDJjMC45OTQtMC41NjIsMi4zMTQtMC41NjIsMy4zMDEsMGwxNS42OTQsOS4wNjlDNDIuMzY3LDEyLjY1Niw0MywxMy43NTMsNDMsMTQuOTMyCXYxOC4xMTRjMCwxLjE3NS0wLjYzMywyLjI3MS0xLjY0NiwyLjg2MUwyNS42Niw0NC45NzFjLTAuNTAzLDAuMjkxLTEuMDczLDAuNDQtMS42NTQsMC40NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yOC44NTYsMzIuOTM3Yy02Ljg2OCwwLTguMzA4LTMuMTUzLTguMzA4LTUuNzk3YzAtMC4yNTEsMC4yMDMtMC40NTIsMC40NTUtMC40NTJoMi4wMjgJYzAuMjI0LDAsMC40MTMsMC4xNjMsMC40NDgsMC4zODRjMC4zMDYsMi4wNjYsMS4yMTgsMy4xMDgsNS4zNzEsMy4xMDhjMy4zMDgsMCw0LjcxNS0wLjc0Nyw0LjcxNS0yLjUwMgljMC0xLjAxLTAuNDAxLTEuNzYtNS41NC0yLjI2M2MtNC4yOTktMC40MjQtNi45NTUtMS4zNzEtNi45NTUtNC44MDljMC0zLjE2NywyLjY3Mi01LjA1Myw3LjE0Ny01LjA1MwljNS4wMjYsMCw3LjUxNywxLjc0NSw3LjgzMSw1LjQ5M2MwLjAxMiwwLjEzLTAuMDM1LDAuMjU1LTAuMTIyLDAuMzVjLTAuMDg2LDAuMDktMC4yMDgsMC4xNDUtMC4zMzQsMC4xNDVoLTIuMDM5CWMtMC4yMTIsMC0wLjM5Ny0wLjE0OS0wLjQ0LTAuMzU0Yy0wLjQ5MS0yLjE3My0xLjY3OC0yLjg2OC00LjkwNC0yLjg2OGMtMy42MTEsMC00LjAzMSwxLjI1Ny00LjAzMSwyLjIJYzAsMS4xNDMsMC40OTUsMS40NzcsNS4zNjcsMi4xMjJjNC44MjUsMC42NCw3LjExNiwxLjU0NCw3LjExNiw0LjkzNWMwLDMuNDE4LTIuODUzLDUuMzc5LTcuODI3LDUuMzc5Ij48L3BhdGg+PC9zdmc+"
        />
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjczYWI3IiBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDUgVjM3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMy4wMywyNS42Yy0wLjY1LTAuOS0xLjU5LTEuNTItMi44LTEuODVjMCwwLDEuMDItMC4zNywxLjk0LTEuNzVjMC41NS0wLjg4LDAuODMtMS45NCwwLjgzLTMuMTggYzAtMi4xNS0wLjc4LTMuOC0yLjM0LTQuOTNDMjkuMSwxMi43NiwyNy4zNCwxMiwyNC4zNSwxMkgxNXYyNGgxMC40M2MyLjgzLTAuMDIsNC45Ni0wLjYzLDYuNDEtMS44YzEuNDQtMS4xOSwyLjE2LTIuOTUsMi4xNi01LjMgQzM0LDI3LjYsMzMuNjgsMjYuNSwzMy4wMywyNS42eiBNMjEsMTZjMCwwLDQuMTcsMCw0LjI1LDBjMS41MiwwLDIuNzUsMS4yMywyLjc1LDIuNzVjMCwxLjUyLTEuMjMsMi43NS0yLjc1LDIuNzUgYy0wLjA4LDAtNC4yNSwwLTQuMjUsMFYxNnogTTI2LDMyaC01di02aDVjMS42NiwwLDMsMS4zNCwzLDNDMjksMzAuNjYsMjcuNjYsMzIsMjYsMzJ6Ij48L3BhdGg+PC9zdmc+"
        />
        <img
          alt="svgImg"
          src="data:image/png;base64,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"
        />
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI5NnB4IiBoZWlnaHQ9Ijk2cHgiPjxwYXRoIGZpbGw9IiMwMGFjYzEiIGQ9Ik0yNCw5LjYwNGMtNi40LDAtMTAuNCwzLjE5OS0xMiw5LjU5N2MyLjQtMy4xOTksNS4yLTQuMzk4LDguNC0zLjU5OSBjMS44MjYsMC40NTYsMy4xMzEsMS43ODEsNC41NzYsMy4yNDdDMjcuMzI4LDIxLjIzNiwzMC4wNTEsMjQsMzYsMjRjNi40LDAsMTAuNC0zLjE5OSwxMi05LjU5OGMtMi40LDMuMTk5LTUuMiw0LjM5OS04LjQsMy42IGMtMS44MjUtMC40NTYtMy4xMy0xLjc4MS00LjU3NS0zLjI0N0MzMi42NzIsMTIuMzY3LDI5Ljk0OCw5LjYwNCwyNCw5LjYwNEwyNCw5LjYwNHogTTEyLDI0Yy02LjQsMC0xMC40LDMuMTk5LTEyLDkuNTk4IGMyLjQtMy4xOTksNS4yLTQuMzk5LDguNC0zLjU5OWMxLjgyNSwwLjQ1NywzLjEzLDEuNzgxLDQuNTc1LDMuMjQ2YzIuMzUzLDIuMzg4LDUuMDc3LDUuMTUyLDExLjAyNSw1LjE1MiBjNi40LDAsMTAuNC0zLjE5OSwxMi05LjU5OGMtMi40LDMuMTk5LTUuMiw0LjM5OS04LjQsMy41OTljLTEuODI2LTAuNDU2LTMuMTMxLTEuNzgxLTQuNTc2LTMuMjQ2QzIwLjY3MiwyNi43NjQsMTcuOTQ5LDI0LDEyLDI0IEwxMiwyNHoiLz48L3N2Zz4=
              "
        />
      </div>
    </div>
  </section>
);

export default AboutSection;