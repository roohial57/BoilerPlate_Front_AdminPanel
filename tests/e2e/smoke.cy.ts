describe('Smoke Test', () => {
  it.only('should load home page', () => {
    cy.visit('/');
    
    // روش ۱: چک کردن ورود به صفحه لاگین
    cy.url().should('include', 'auth?url='); // اگر به صفحه لاگین ریدایرکت شود
    cy.get('input[placeholder="UserName"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Login');
    
    // وارد کردن اطلاعات کاربری
    cy.get('input[placeholder="UserName"]').clear().type('admin');
    cy.get('input[placeholder="Password"]').clear().type('Admin123!');
    
    // کلیک بر روی دکمه لاگین
    cy.get('button[type="submit"]').click();
    
    // منتظر ماندن برای ریدایرکت بعد از لاگین
    cy.url().should('not.include', '/auth'); // چک می‌کند که از صفحه لاگین خارج شده
    

  });
});
