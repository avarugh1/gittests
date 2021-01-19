import { ClientFunction, Selector } from 'testcafe';

fixture `Change Element Style`
    .page `https://devexpress.github.io/testcafe/example`;

test('Hide an element', async t => {
    const populateButton     = Selector('#populate');
    const hidePopulateButton = ClientFunction(() => {
        document.getElementById('populate').style.display = 'none';
    });

    await t.expect(populateButton.visible).ok();

    await hidePopulateButton();

    await t.expect(populateButton.visible).notOk();
});

test('Fails 50% of the time', async t => {
    console.log('enter');
    await t.expect(Math.floor((Math.random() * 100) + 1)).gte(50);
});