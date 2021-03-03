import React from 'react';
import { TinaProvider, TinaCMS, useCMS } from 'tinacms';
import logo from './Icon.svg';
import './App.css';

function App() {
  const cms = new TinaCMS({
    sidebar: true,
  });

  return (
    <TinaProvider cms={cms}>
      <div className="App">
        <PageContent />
      </div>
    </TinaProvider>
  );
}

export default App;

const pageData = {
  title: 'Tina is not a CMS',
  body: 'It is a toolkit for creating a custom CMS.',
};

function PageContent() {
  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{pageData.title}</h1>
      <p>{pageData.body}</p>
      <EditButton />
    </section>
  );
}

function EditButton() {
  const cms = useCMS();
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  );
}
