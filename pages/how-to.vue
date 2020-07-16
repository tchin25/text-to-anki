<template>
  <div class="container">
    <h3 class="title mt-6">
      How To Use This Website
    </h3>
    <h3 class="title is-4 mt-4">
      Minimum Requirements
    </h3>
    <div class="content">
      <ul>
        <li>
          The Anki app downloaded on your computer
        </li>
        <li>
          FooSoft's
          <a href="https://ankiweb.net/shared/info/2055492159">AnkiConnect</a>
          add-on
        </li>
        <li>
          This website domain added to AnkiConnect's WebCorsOriginList
          <ul>
            <li>
              In Anki: <code>Tools > Add-ons > AnkiConnect > Config</code>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <h3 class="title is-4 mt-4">
      Recommended Usage
    </h3>
    <div class="content">
      This website was made to create sentence cards automatically when given a
      chunk of text. It was originally geared towards Japanese, but can be used
      for other languages as well. It is recommended to use this with the Anki
      add-on <a href="https://ankiweb.net/shared/info/900801631">MorphMan</a>,
      since MorphMan can parse the sentence cards given to it, reorder them for
      the most optimal learning experience, and also suspend any cards that are
      too long or too short.
    </div>
    <h3 class="title is-4 mt-4">
      Troubleshooting
    </h3>
    <div class="content">
      If you have problems, unfortunately it could either be this website or
      AnkiConnect. If you are a programmer, both of them are open source so you
      can go submit an issue or work on fixing it yourself.
      <br /><br />
      <p>
        If you have issues with adding cards:
        <ul>
            <li>There may be a duplicate of that card already in your deck</li>
            <li>It might be an issue with AnkiConnect's addNotes api (an issue about it is already open on GitHub)</li>
            <li>You might have changes some settings in Anki but the website still has the old settings
                <ul><li>This website can't auto-detect when settings are changed in Anki, so you have to refresh the page or clear the cache</li></ul>
            </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
